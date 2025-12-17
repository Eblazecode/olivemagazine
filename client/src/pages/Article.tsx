import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Share2, MessageCircle, Bookmark, Clock, Calendar } from "lucide-react";

// Image
import heroImage from "@assets/generated_images/nigerian_woman_reading_bible.png";

export default function Article() {
  return (
      <div className="min-h-screen bg-background flex flex-col font-sans">
        <Navbar />

        <main className="flex-1 pb-16">
          {/* ================= ARTICLE HEADER ================= */}
          <header className="relative w-full h-[60vh] min-h-[400px]">
            <div className="absolute inset-0">
              <img
                  src={heroImage}
                  alt="Finding Peace Through Faith"
                  className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
            </div>

            <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20">
              <div className="container mx-auto max-w-4xl">
                <Badge className="bg-accent text-accent-foreground mb-6 font-serif tracking-wide text-sm px-4 py-1">
                  Faith & Spiritual Growth
                </Badge>

                <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                  Finding Peace in the Midst of Life’s Storms
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-white/90">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border-2 border-white/20">
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-sm">Rev. Stephen Amoh</p>
                      <p className="text-xs opacity-80">Editor-in-Chief, Olive Magazine</p>
                    </div>
                  </div>

                  <div className="w-px h-8 bg-white/20 hidden sm:block" />

                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    December 2025
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4" />
                    6 min read
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* ================= ARTICLE BODY ================= */}
          <div className="container mx-auto px-4 mt-12 max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Main Content */}
            <article className="md:col-span-12 lg:col-span-9 prose prose-lg prose-slate max-w-none">
              <p className="lead text-xl md:text-2xl font-serif text-primary/80 leading-relaxed mb-8">
                In a nation filled with daily pressures, rising demands, and constant uncertainty,
                true peace often feels distant. Yet, God’s Word assures us that peace is not found
                in the absence of storms—but in His presence.
              </p>

              <p>
                Many believers wake up each morning already overwhelmed—traffic, work pressure,
                family responsibilities, and the noise of the world competing for attention.
                These realities are familiar to many Nigerians today. But Scripture reminds us
                that peace is not a product of favorable conditions; it is a gift from God.
              </p>

              <h3 className="font-serif text-primary mt-12 mb-6">
                The Trap of Human Control
              </h3>

              <p>
                Anxiety often grows from our desire to control outcomes. We plan carefully,
                strategize endlessly, and still worry when things do not align. But God never
                promised us control—He promised us peace.
              </p>

              <div className="bg-secondary/30 border-l-4 border-accent p-8 my-10 rounded-r-lg">
                <p className="text-xl font-serif italic text-primary mb-4">
                  “Peace I leave with you; My peace I give to you. Not as the world gives do I give
                  to you. Let not your heart be troubled, neither let it be afraid.”
                </p>
                <cite className="block text-sm font-bold text-muted-foreground not-italic uppercase tracking-wider">
                  — John 14:27
                </cite>
              </div>

              <p>
                The peace Jesus offers is not temporary or circumstantial. It remains when finances
                fluctuate, when plans delay, and when life becomes uncertain. This peace anchors the
                believer firmly, regardless of external pressure.
              </p>

              <h3 className="font-serif text-primary mt-12 mb-6">
                Walking Daily in God’s Peace
              </h3>

              <p>
                Experiencing God’s peace requires intentional living. As believers, we must create
                space for God amid daily demands.
              </p>

              <ul>
                <li>
                  <strong>Begin each day with God:</strong> Prayer and Scripture set the tone for
                  spiritual stability.
                </li>
                <li>
                  <strong>Practice gratitude:</strong> A thankful heart disarms anxiety.
                </li>
                <li>
                  <strong>Guard your mind:</strong> Be mindful of what you consume—news, conversations,
                  and media.
                </li>
              </ul>

              <p>
                Peace is not found in escaping responsibility but in trusting God through it.
                When we surrender control, we discover the calm assurance that only Christ can give.
              </p>

              <p>
                May this truth guide you through every season: God’s peace is not distant—it is
                available, dependable, and sufficient.
              </p>
            </article>

            {/* ================= SIDEBAR ================= */}
            <aside className="md:col-span-12 lg:col-span-3 space-y-8">
              <div className="sticky top-24">
                <div className="bg-card border rounded-xl p-6 shadow-sm space-y-6">
                  <div className="text-center">
                    <p className="font-serif font-bold text-primary mb-4">
                      Share this article
                    </p>
                    <div className="flex justify-center gap-2">
                      <Button size="icon" variant="outline" className="rounded-full">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="outline" className="rounded-full">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="outline" className="rounded-full">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <p className="font-serif font-bold text-primary mb-4">
                      More from Rev. Stephen Amoh
                    </p>
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="block group">
                        <span className="text-sm font-medium group-hover:text-accent transition-colors">
                          The Power of Patience
                        </span>
                          <span className="block text-xs text-muted-foreground mt-1">
                          Dec 2025 • 7 min read
                        </span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block group">
                        <span className="text-sm font-medium group-hover:text-accent transition-colors">
                          Redeeming the Time
                        </span>
                          <span className="block text-xs text-muted-foreground mt-1">
                          Nov 2025 • 6 min read
                        </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </main>

        <Footer />
      </div>
  );
}
