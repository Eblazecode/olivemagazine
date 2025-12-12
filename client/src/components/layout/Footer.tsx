import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/">
              <a className="font-serif text-3xl font-bold tracking-tight mb-6 block">
                FaithLens<span className="text-accent">.</span>
              </a>
            </Link>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Inspiration for everyday Christian living. Exploring faith, culture, and purpose through a modern lens.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-accent">Explore</h4>
            <ul className="space-y-3">
              <li><Link href="/about"><a className="hover:text-white/80 transition-colors">About Us</a></Link></li>
              <li><Link href="/devotionals"><a className="hover:text-white/80 transition-colors">Daily Devotionals</a></Link></li>
              <li><Link href="/multimedia"><a className="hover:text-white/80 transition-colors">Podcasts & Video</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-white/80 transition-colors">Contact</a></Link></li>
              <li><Link href="/write-for-us"><a className="hover:text-white/80 transition-colors">Write for Us</a></Link></li>
            </ul>
          </div>

          {/* Categories Column */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-accent">Topics</h4>
            <ul className="space-y-3">
              <li><Link href="#"><a className="hover:text-white/80 transition-colors">Faith & Growth</a></Link></li>
              <li><Link href="#"><a className="hover:text-white/80 transition-colors">Christian Living</a></Link></li>
              <li><Link href="#"><a className="hover:text-white/80 transition-colors">Marriage & Family</a></Link></li>
              <li><Link href="#"><a className="hover:text-white/80 transition-colors">Culture</a></Link></li>
              <li><Link href="#"><a className="hover:text-white/80 transition-colors">Leadership</a></Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-accent">Weekly Inspiration</h4>
            <p className="text-primary-foreground/80 mb-4 text-sm">
              Join 50,000+ readers receiving our weekly digest of faith-filled content.
            </p>
            <div className="flex flex-col gap-3">
              <Input 
                placeholder="Your email address" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-accent"
              />
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} FaithLens Magazine. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
