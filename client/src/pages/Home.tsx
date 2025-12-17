import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FeatureSlider } from "@/components/FeatureSlider";
import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Heart, Share2 } from "lucide-react";
import editorImage from "@assets/generated_images/revsteve.jpg"; // replace later with Rev Amoh photo



// Mock Data
import hero1 from "@assets/generated_images/nigerian_landscape_sunrise.png";
import hero2 from "@assets/generated_images/honourable.jpeg";
import article1 from "@assets/generated_images/nigerian_woman_reading_bible.png";
import article2 from "@assets/generated_images/nigerian_community_fellowship.png";
import article3 from "@assets/generated_images/nigerian_bible_study_group.png";

const slides = [
  {
    id: "1",
    image: hero1,
    title: "Olive Magazine — Fresh Inspiration",
    subtitle: "Nourishing the Christian mind with faith, hope, and love for everyday living.",
    category: "Welcome"
  },
  {
    id: "2",
    image: hero2,
    title: "MY VISION FOR BWARI AREA COUNCIL -Hon. Audi Haruna Shekwolo" .toUpperCase(),
    subtitle: "“The people of BAC should look out for a competent person who has the goodwill of the council at heart, not a political party”",
    category: "Politics & Society"
  },
  {
    id: "3",
    image: article3,
    title: "Building Community in a Digital Age",
    subtitle: "Young adults finding authentic connection through small groups.",
    category: "Christian Living"
  }
];

const featuredArticles = [
  {
    id: "editorial-vision",
    title: "From the Editor-in-Chief: Why Every Olive Edition Is Special",
    excerpt:
        "Since 2017, Olive Magazine has carried a divine mandate to unite the body of Christ, promote godly leadership, and shape society with truth.",
    category: "Editorial",
    author: "Rev. Stephen Amoh",
    date: "Dec 2025",
    imageUrl: article1,
  },
  {
    id: "what-is-life",
    title: "What Is Life? A Call to Eternal Perspective",
    excerpt:
        "Life is fragile and temporary. The real question is not how long we live, but how well we live for God and eternity.",
    category: "Faith & Spiritual Growth",
    author: "Rev. Stephen Amoh",
    date: "Dec 2025",
    imageUrl: article2,
  },
  {
    id: "Bwari-area-council-vision",
    title: "My Vision for Bwari Area Council",
    excerpt:
        "The people of BAC should look out for a competent person who has the goodwill " +
        "of the council at heart, not a political party - AUDI HARUNA SHEKWOLO\n”\n" +
        "\n.",
    category: "politics & Society",
    author: "Rev. Stephen Amoh",
    date: "Dec 2025",
    imageUrl: hero2,
  },
  {
    id: "redeem-the-time",
    title: "Redeem the Time: Living Purposefully in a Distracted World",
    excerpt:
        "Time is more valuable than money. Once lost, it can never be recovered. Scripture calls us to live focused and intentional lives.",
    category: "Christian Living",
    author: "Rev. Stephen Amoh",
    date: "Dec 2025",
    imageUrl: article3,
  },
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
              {/* ================= EDITOR-IN-CHIEF ================= */}
              {/* ================= EDITOR-IN-CHIEF ================= */}
              <Card className="border-none bg-secondary/50 overflow-hidden">
                <CardContent className="p-6 space-y-6">

                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <img
                        src={editorImage}
                        alt="Rev. Stephen Amoh"
                        className="h-16 w-16 rounded-full object-cover ring-2 ring-accent/30"
                    />

                    <div>
                      <p className="text-xs uppercase tracking-widest text-accent font-bold">
                        Editor-in-Chief
                      </p>
                      <h3 className="font-serif text-lg font-bold text-primary">
                        Rev. Stephen Amoh
                      </h3>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Since 2017, Olive Magazine has carried a divine mandate to unite the body of
                    Christ, promote godly leadership, and speak truth into society.
                  </p>

                  {/* CTA */}
                  <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
                      onClick={() => {
                        // replace with router push if using react-router / next
                        window.location.href = "/editor-in-chief";
                      }}
                  >
                    Read Full Editorial
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>



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
