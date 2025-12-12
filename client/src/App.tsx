import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Article from "@/pages/Article";
import Devotionals from "@/pages/Devotionals";
import Multimedia from "@/pages/Multimedia";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/article/:id" component={Article} />
      <Route path="/devotionals" component={Devotionals} />
      <Route path="/multimedia" component={Multimedia} />
      <Route path="/contact" component={Contact} />
      {/* Fallback to Home for category links for now since they are mock */}
      <Route path="/category/:slug" component={Home} /> 
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
