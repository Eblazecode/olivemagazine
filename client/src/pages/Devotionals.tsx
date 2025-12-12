import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Search, Sun, Moon, Sunrise, Sunset } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Devotionals() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const devotionals = [
    {
      title: "The Quiet Strength of Patience",
      scripture: "James 1:4",
      excerpt: "Patience isn't just waiting; it's how we behave while we wait. In a world of instant gratification...",
      theme: "Growth",
      time: "Morning"
    },
    {
      title: "Letting Go of Anxiety",
      scripture: "Philippians 4:6-7",
      excerpt: "When the weight of the world feels heavy on your shoulders, there is a place of rest available to you...",
      theme: "Peace",
      time: "Evening"
    },
    {
      title: "Called to Serve",
      scripture: "Galatians 5:13",
      excerpt: "True leadership begins with a towel and a basin. How can we serve those around us today?",
      theme: "Service",
      time: "Morning"
    },
    {
      title: "Forgiveness as Freedom",
      scripture: "Ephesians 4:32",
      excerpt: "Holding onto a grudge is like drinking poison and expecting the other person to die. Choose freedom today.",
      theme: "Healing",
      time: "Afternoon"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-secondary/40 py-16 text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Daily Inspiration</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Daily Devotionals</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Start and end your day with God's word. Short, impactful reflections to guide your spiritual journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by topic (e.g. Hope, Anxiety)" className="pl-10 bg-background" />
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className={cn("w-[240px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </section>

        {/* Featured Today */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-primary text-primary-foreground border-none overflow-hidden relative group cursor-pointer hover:shadow-xl transition-shadow">
              <CardContent className="p-8 md:p-12 flex flex-col justify-between h-full relative z-10">
                <div>
                  <div className="flex items-center gap-2 text-accent mb-4">
                    <Sunrise className="h-5 w-5" />
                    <span className="font-bold uppercase tracking-wider text-sm">Morning Devotional</span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold mb-4">The Grace of New Beginnings</h2>
                  <p className="text-primary-foreground/80 text-lg mb-6 leading-relaxed">
                    "His mercies are new every morning..." - Lamentations 3:23. No matter what happened yesterday, today is a fresh canvas painted with God's grace.
                  </p>
                </div>
                <Button variant="outline" className="self-start text-white border-white hover:bg-white hover:text-primary">Read Now</Button>
              </CardContent>
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -mr-16 -mt-16 pointer-events-none"></div>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors cursor-pointer">
              <CardContent className="p-8 md:p-12 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Sunset className="h-5 w-5" />
                    <span className="font-bold uppercase tracking-wider text-sm">Evening Reflection</span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-primary mb-4">Resting in His Promises</h2>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    Before you close your eyes, release your worries to the One who never sleeps. He is holding your tomorrow.
                  </p>
                </div>
                <Button variant="ghost" className="self-start hover:text-primary pl-0">Read Now <span className="ml-2">→</span></Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Recent Devotionals Grid */}
        <section className="container mx-auto px-4 py-12">
          <h3 className="font-serif text-2xl font-bold text-primary mb-8">Recent Devotionals</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devotionals.map((dev, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow border-none shadow-sm bg-secondary/20">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-1 rounded-sm">{dev.theme}</span>
                    {dev.time === 'Morning' ? <Sun className="h-4 w-4 text-muted-foreground" /> : <Moon className="h-4 w-4 text-muted-foreground" />}
                  </div>
                  <h4 className="font-serif text-xl font-bold text-primary mb-2 line-clamp-1">{dev.title}</h4>
                  <p className="text-xs text-muted-foreground font-serif italic mb-3">{dev.scripture}</p>
                  <p className="text-sm text-foreground/80 line-clamp-3 mb-4">
                    {dev.excerpt}
                  </p>
                  <Button variant="link" className="px-0 text-primary h-auto text-sm">Read More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
