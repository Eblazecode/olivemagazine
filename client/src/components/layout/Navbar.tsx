import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Devotionals", path: "/devotionals" },
    { name: "Multimedia", path: "/multimedia" },
    { name: "Contact", path: "/contact" },
  ];

  const categories = [
    "Faith & Spiritual Growth",
    "Christian Living",
    "Marriage & Relationships",
    "Youth & Purpose",
    "Leadership & Ministry",
    "Culture & Society",
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="font-serif text-3xl font-bold tracking-tight text-primary hover:opacity-80 transition-opacity">
            OLIVE<span className="text-accent">.</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/">
            <a className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/") ? "text-primary font-bold" : "text-muted-foreground"}`}>
              Home
            </a>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary outline-none">
              Categories <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 bg-card border-border">
              {categories.map((cat) => (
                <DropdownMenuItem key={cat} className="cursor-pointer">
                  <Link href={`/category/${cat.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}>
                    {cat}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.slice(1).map((link) => (
            <Link key={link.path} href={link.path}>
              <a className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.path) ? "text-primary font-bold" : "text-muted-foreground"}`}>
                {link.name}
              </a>
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <Search className="h-5 w-5" />
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif px-6">
            Subscribe
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                <Link href="/">
                  <a className="font-serif text-2xl font-bold" onClick={() => setIsMobileMenuOpen(false)}>
                    OLIVE
                  </a>
                </Link>
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link key={link.path} href={link.path}>
                      <a 
                        className={`text-lg font-medium ${isActive(link.path) ? "text-primary" : "text-muted-foreground"}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    </Link>
                  ))}
                  <div className="h-px bg-border my-2" />
                  <p className="text-sm font-bold text-muted-foreground mb-2">Categories</p>
                  {categories.map((cat) => (
                    <Link key={cat} href={`/category/${cat.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}>
                      <a 
                        className="text-base text-muted-foreground hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {cat}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
