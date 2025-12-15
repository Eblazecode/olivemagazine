import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);

// =======================
// RAW BODY SUPPORT
// =======================
declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

// =======================
// BODY PARSERS
// =======================
app.use(
    express.json({
      verify: (req, _res, buf) => {
        (req as any).rawBody = buf;
      },
    })
);

app.use(express.urlencoded({ extended: false }));

// =======================
// LOGGER
// =======================
export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

// =======================
// REQUEST LOGGING
// =======================
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined;

  const originalResJson = res.json.bind(res);
  res.json = (bodyJson: any) => {
    capturedJsonResponse = bodyJson;
    return originalResJson(bodyJson);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;

    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;

      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      log(logLine);
    }
  });

  next();
});

// =======================
// BOOTSTRAP SERVER
// =======================
(async () => {
  await registerRoutes(httpServer, app);

  // ===================
  // ERROR HANDLER
  // ===================
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err?.status || err?.statusCode || 500;
    const message = err?.message || "Internal Server Error";

    res.status(status).json({ message });

    // ❗ Do NOT throw again (this crashes Node)
    log(message, "error");
  });

  // ===================
  // VITE / STATIC
  // ===================
  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  // ===================
  // START SERVER (FIXED)
  // ===================
  const port = Number(process.env.PORT) || 5000;

  httpServer.listen(port, "127.0.0.1", () => {
    log(`🚀 Olive server running at http://localhost:${port}`);
  });
})();
