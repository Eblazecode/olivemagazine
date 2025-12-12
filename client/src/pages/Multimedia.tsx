import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Mic, Video, Music } from "lucide-react";
import heroImage from "@assets/generated_images/nigerian_worship_service.png";

export default function Multimedia() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero */}
        <div className="relative h-[400px] flex items-center justify-center">
          <div className="absolute inset-0">
            <img src={heroImage} alt="Multimedia" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm mix-blend-multiply" />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="font-serif text-5xl font-bold mb-4">Watch & Listen</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Sermons, podcasts, worship sessions, and stories of faith to inspire your week.
            </p>
          </div>
        </div>

        {/* Content Tabs */}
        <section className="container mx-auto px-4 py-12">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-2xl grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="worship">Worship</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-12">
              
              {/* Latest Podcast Episode */}
              <div className="bg-card border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center shadow-sm">
                <div className="w-full md:w-64 h-64 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                  <Mic className="h-16 w-16 text-primary/40" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <span className="text-accent font-bold uppercase tracking-widest text-xs mb-2 block">Latest Podcast • Ep 42</span>
                  <h3 className="font-serif text-3xl font-bold text-primary mb-4">Faith in the Public Square</h3>
                  <p className="text-muted-foreground mb-6 text-lg">
                    How do we maintain our convictions while engaging with a culture that often disagrees with us? Join us for a deep dive conversation with Dr. Timothy Keller.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                      <Play className="h-4 w-4 fill-current" /> Listen Now (45m)
                    </Button>
                    <Button variant="outline">View Show Notes</Button>
                  </div>
                </div>
              </div>

              {/* Video Grid */}
              <div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Video className="h-5 w-5 text-accent" /> Latest Videos
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="border-none shadow-none group cursor-pointer">
                      <CardContent className="p-0">
                        <div className="aspect-video bg-black/10 rounded-lg mb-3 relative overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                            <div className="h-12 w-12 rounded-full bg-white/90 flex items-center justify-center pl-1 group-hover:scale-110 transition-transform">
                              <Play className="h-5 w-5 text-primary fill-primary" />
                            </div>
                          </div>
                        </div>
                        <h4 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">Finding God in the Wilderness - Part {i}</h4>
                        <p className="text-sm text-muted-foreground mt-1">Pastor John Doe • 15 mins</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Worship Playlist */}
              <div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Music className="h-5 w-5 text-accent" /> Worship Playlists
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {['Morning Praise', 'Deep Prayer', 'Instrumental', 'Sunday Anthems'].map((list) => (
                    <div key={list} className="aspect-square bg-gradient-to-br from-primary to-primary/60 rounded-xl p-6 flex flex-col justify-between text-white hover:scale-105 transition-transform cursor-pointer shadow-lg">
                      <Music className="h-8 w-8 opacity-50" />
                      <span className="font-bold font-serif text-xl">{list}</span>
                    </div>
                  ))}
                </div>
              </div>

            </TabsContent>
            
            <TabsContent value="podcasts">
                <div className="text-center py-12 text-muted-foreground">More podcasts content loading...</div>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <Footer />
    </div>
  );
}
