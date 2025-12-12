import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Share2, MessageCircle, Bookmark, Clock, Calendar } from "lucide-react";

// Mock Data
import heroImage from "@assets/generated_images/open_bible_with_coffee_in_morning_light.png";

export default function Article() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 pb-16">
        {/* Article Header */}
        <header className="relative w-full h-[60vh] min-h-[400px]">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="Article Hero" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
          </div>
          
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20">
            <div className="container mx-auto max-w-4xl">
              <Badge className="bg-accent text-accent-foreground hover:bg-accent/90 mb-6 font-serif tracking-wide text-sm px-4 py-1">
                Faith & Spiritual Growth
              </Badge>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-sm">
                Finding Peace in the Midst of Chaos
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border-2 border-white/20">
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-sm">Sarah Jenkins</p>
                    <p className="text-xs opacity-80">Editor in Chief</p>
                  </div>
                </div>
                <div className="w-px h-8 bg-white/20 hidden sm:block" />
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  December 12, 2025
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4" />
                  5 min read
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="container mx-auto px-4 mt-12 max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Main Text */}
          <article className="md:col-span-12 lg:col-span-9 prose prose-lg prose-slate max-w-none">
            <p className="lead text-xl md:text-2xl font-serif text-primary/80 leading-relaxed mb-8">
              In a world that never seems to stop moving, finding moments of genuine peace can feel like chasing the wind. Yet, scripture offers us an anchor that holds firm even in the fiercest storms.
            </p>

            <p>
              The morning sun was barely peeking through the curtains when the notifications started. Emails, news alerts, text messages—the noise of the world rushing in before my feet even hit the floor. It's a familiar scenario for many of us. We live in an age of unprecedented connectivity, yet our souls often feel disconnected from the source of true peace.
            </p>

            <h3 className="font-serif text-primary mt-12 mb-6">The Illusion of Control</h3>
            <p>
              Anxiety often stems from a desire to control the uncontrollable. We meticulously plan our days, our careers, and our families' futures, believing that if we just work hard enough, we can secure our peace. But the Bible tells a different story.
            </p>

            <div className="bg-secondary/30 border-l-4 border-accent p-8 my-10 rounded-r-lg">
              <p className="text-xl font-serif italic text-primary mb-4">
                "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid."
              </p>
              <cite className="block text-sm font-bold text-muted-foreground not-italic uppercase tracking-wider">— John 14:27</cite>
            </div>

            <p>
              Jesus distinguishes His peace from the world's peace. The world's peace is circumstantial—it depends on everything going right. Your bank account is full, your health is good, your relationships are smooth. But Jesus offers a peace that transcends circumstances. It is a peace that exists <em>in the midst</em> of the storm, not just in its absence.
            </p>

            <h3 className="font-serif text-primary mt-12 mb-6">Practical Steps to Cultivate Peace</h3>
            <p>
              So how do we access this peace daily? It requires intentionality.
            </p>
            <ul>
              <li><strong>Start with Silence:</strong> Before checking your phone, spend the first 10 minutes of your day in silence and prayer.</li>
              <li><strong>Practice Gratitude:</strong> Write down three things you are thankful for every evening. Gratitude shifts our focus from what we lack to what we have.</li>
              <li><strong>Limit Consumption:</strong> Be mindful of the media you consume. Does it feed your fear or your faith?</li>
            </ul>

            <p>
              As we move forward into this week, let us challenge ourselves to let go of the illusion of control and embrace the chaotic beauty of trust. For in that surrender, we find the peace that surpasses all understanding.
            </p>
          </article>

          {/* Social Share & Actions Sidebar */}
          <aside className="md:col-span-12 lg:col-span-3 space-y-8">
            <div className="sticky top-24">
              <div className="bg-card border rounded-xl p-6 shadow-sm space-y-6">
                <div className="text-center">
                  <p className="font-serif font-bold text-primary mb-4">Share this story</p>
                  <div className="flex justify-center gap-2">
                    <Button size="icon" variant="outline" className="rounded-full hover:bg-blue-50 hover:text-blue-600 border-input"><Share2 className="h-4 w-4" /></Button>
                    <Button size="icon" variant="outline" className="rounded-full hover:bg-green-50 hover:text-green-600 border-input"><MessageCircle className="h-4 w-4" /></Button>
                    <Button size="icon" variant="outline" className="rounded-full hover:bg-amber-50 hover:text-amber-600 border-input"><Bookmark className="h-4 w-4" /></Button>
                  </div>
                </div>
                <Separator />
                <div>
                  <p className="font-serif font-bold text-primary mb-4">More from Sarah</p>
                  <ul className="space-y-4">
                    <li>
                      <a href="#" className="block group">
                        <span className="text-sm font-medium group-hover:text-accent transition-colors">The Art of Listening</span>
                        <span className="block text-xs text-muted-foreground mt-1">Nov 28 • 4 min read</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block group">
                        <span className="text-sm font-medium group-hover:text-accent transition-colors">Faith in the Workplace</span>
                        <span className="block text-xs text-muted-foreground mt-1">Nov 15 • 6 min read</span>
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
