import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Heart, Mail } from "lucide-react";
import teamImage from "@assets/generated_images/group_praying_together.png";

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              To inspire, equip, and encourage believers to live out their faith authentically in a modern world.
            </p>
          </div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        </section>

        {/* Vision Section */}
        <section className="py-20 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src={teamImage} alt="Our Community" className="w-full object-cover aspect-[4/3]" />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="font-serif text-4xl font-bold text-primary">Spreading Light & Wisdom</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Olive Magazine began with a simple question: "How do we navigate the complexities of modern life without losing sight of the Gospel?" 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that Christianity isn't just a Sunday event—it's a lens through which we view every aspect of our lives. From our careers and relationships to how we engage with art and culture, our faith informs our perspective. We aim to be "Fresh Oil for Daily Living."
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex flex-col gap-2">
                  <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center text-accent-foreground mb-2">
                    <BookOpen className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-bold text-primary">Biblical Truth</h4>
                  <p className="text-sm text-muted-foreground">Rooted in scripture, relevant for today.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center text-accent-foreground mb-2">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-bold text-primary">Community</h4>
                  <p className="text-sm text-muted-foreground">Building bridges, not walls.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statement of Faith */}
        <section className="bg-secondary/30 py-20">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="font-serif text-3xl font-bold text-primary mb-12">Statement of Faith</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "The Word", desc: "We believe the Bible is the inspired, authoritative Word of God." },
                { title: "The Trinity", desc: "We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit." },
                { title: "Salvation", desc: "We believe salvation is a free gift of God found only through Jesus Christ." }
              ].map((item, i) => (
                <Card key={i} className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="font-serif text-xl font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 container mx-auto px-4 text-center">
           <h2 className="font-serif text-3xl font-bold text-primary mb-6">Join Our Team</h2>
           <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
             We are always looking for passionate writers, photographers, and creatives to contribute to Olive Magazine.
           </p>
           <Button className="bg-primary text-primary-foreground px-8 py-6 text-lg">
             <Mail className="mr-2 h-5 w-5" /> Get in Touch
           </Button>
        </section>

      </main>

      <Footer />
    </div>
  );
}
