import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FeatureSlider } from "@/components/FeatureSlider";
import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Heart, Share2 } from "lucide-react";

// Mock Data
import hero1 from "@assets/generated_images/mountain_sunrise_landscape.png";
import hero2 from "@assets/generated_images/group_praying_together.png";
import article1 from "@assets/generated_images/open_bible_with_coffee_in_morning_light.png";
import article2 from "@assets/generated_images/bible_study_group.png";
import article3 from "@assets/generated_images/worship_concert_silhouette.png";

const slides = [
  {
    id: "1",
    image: hero1,
    title: "Finding Peace in the Midst of Chaos",
    subtitle: "How to anchor your soul when the world feels overwhelming.",
    category: "Faith & Spiritual Growth"
  },
  {
    id: "2",
    image: hero2,
    title: "The Power of Community Prayer",
    subtitle: "Why we are called to gather and lift each other up.",
    category: "Christian Living"
  }
];

const featuredArticles = [
  {
    id: "3",
    title: "Morning Routines for a Spirit-Filled Day",
    excerpt: "Start your day with intention and align your heart with God's purpose before the busyness begins.",
    category: "Christian Living",
    author: "Sarah Jenkins",
    date: "Dec 12, 2025",
    imageUrl: article1
  },
  {
    id: "4",
    title: "Building a Marriage on Solid Rock",
    excerpt: "Practical wisdom for couples seeking to center their relationship on biblical principles.",
    category: "Marriage & Family",
    author: "David & Mary Miller",
    date: "Dec 10, 2025",
    imageUrl: article2
  },
  {
    id: "5",
    title: "Modern Worship: More Than Just Music",
    excerpt: "Exploring the heart of worship and how it transforms our daily walk with Christ.",
    category: "Culture & Society",
    author: "James Wilson",
    date: "Dec 08, 2025",
    imageUrl: article3
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-8">
          <FeatureSlider slides={slides} />
        </section>

        {/* Featured Articles & Sidebar Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-12">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-3xl font-bold text-primary">Latest Stories</h2>
                <Button variant="link" className="text-accent hover:text-accent/80">View All <ArrowRight className="ml-2 h-4 w-4"/></Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredArticles.slice(0, 2).map(article => (
                  <ArticleCard key={article.id} {...article} />
                ))}
              </div>

              <ArticleCard 
                {...featuredArticles[2]} 
                variant="horizontal" 
                className="mt-8 border-t pt-8"
              />

              {/* Newsletter Banner */}
              <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12 my-12 relative overflow-hidden">
                <div className="relative z-10 max-w-2xl">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">Join Our Community of Faith</h3>
                  <p className="mb-6 text-primary-foreground/80 text-lg">
                    Get weekly devotionals, inspiring stories, and exclusive content delivered straight to your inbox.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input placeholder="Enter your email" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 font-serif font-bold">Subscribe</Button>
                  </div>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Daily Devotional Teaser */}
              <Card className="bg-secondary/50 border-none">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4 text-accent-foreground font-bold uppercase tracking-widest text-xs">
                    <BookOpen className="h-4 w-4" />
                    Daily Devotional
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-2">Walking in Wisdom</h3>
                  <p className="text-muted-foreground italic mb-4">"The fear of the Lord is the beginning of knowledge..." - Proverbs 1:7</p>
                  <p className="text-sm text-foreground/80 mb-6 leading-relaxed">
                    True wisdom isn't just about knowing facts; it's about seeing life from God's perspective. Today, ask God to reveal...
                  </p>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    Read Full Devotional
                  </Button>
                </CardContent>
              </Card>

              {/* Trending Topics */}
              <div>
                <h3 className="font-serif text-xl font-bold mb-6 border-b pb-2">Trending Topics</h3>
                <div className="space-y-4">
                  {['Prayer', 'Mental Health', 'Parenting', 'Leadership', 'Bible Study'].map((topic, i) => (
                    <div key={topic} className="flex items-center justify-between group cursor-pointer">
                      <span className="text-lg font-medium text-muted-foreground group-hover:text-primary transition-colors">
                        <span className="text-accent font-serif mr-3 italic">0{i + 1}</span>
                        {topic}
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Scripture of the Day */}
              <div className="bg-accent/10 p-8 rounded-xl text-center">
                <h3 className="font-serif text-lg font-bold text-accent-foreground mb-4">Scripture of the Day</h3>
                <p className="font-serif text-xl text-primary leading-relaxed mb-4">
                  "But those who hope in the Lord will renew their strength. They will soar on wings like eagles."
                </p>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">— Isaiah 40:31</p>
                <div className="flex justify-center gap-4 mt-6">
                  <Button size="icon" variant="ghost" className="hover:text-accent"><Share2 className="h-4 w-4" /></Button>
                  <Button size="icon" variant="ghost" className="hover:text-red-500"><Heart className="h-4 w-4" /></Button>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
