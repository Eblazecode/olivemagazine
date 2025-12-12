import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  className?: string;
  variant?: "vertical" | "horizontal";
}

export function ArticleCard({ 
  id, 
  title, 
  excerpt, 
  category, 
  author, 
  date, 
  imageUrl,
  className,
  variant = "vertical"
}: ArticleCardProps) {
  if (variant === "horizontal") {
    return (
      <Link href={`/article/${id}`}>
        <div className={cn("group flex flex-col md:flex-row gap-6 cursor-pointer items-start", className)}>
          <div className="relative overflow-hidden rounded-lg w-full md:w-1/3 aspect-[4/3]">
            <img 
              src={imageUrl} 
              alt={title}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex-1 space-y-3 py-2">
            <Badge variant="secondary" className="bg-accent/10 text-accent-foreground hover:bg-accent/20 font-serif tracking-wide rounded-sm">
              {category}
            </Badge>
            <h3 className="font-serif text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground line-clamp-2 leading-relaxed">
              {excerpt}
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider font-medium mt-2">
              <span className="text-primary">{author}</span>
              <span>•</span>
              <span>{date}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/article/${id}`}>
      <Card className={cn("group cursor-pointer border-none shadow-none bg-transparent h-full flex flex-col", className)}>
        <CardHeader className="p-0 mb-4 overflow-hidden rounded-lg">
          <div className="aspect-[3/2] overflow-hidden w-full">
            <img 
              src={imageUrl} 
              alt={title}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="p-0 flex-1 space-y-3">
          <Badge variant="outline" className="border-accent/30 text-accent-foreground font-serif tracking-wide rounded-sm">
            {category}
          </Badge>
          <h3 className="font-serif text-xl font-bold leading-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
            {excerpt}
          </p>
        </CardContent>
        <CardFooter className="p-0 mt-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider font-medium">
            <span className="text-primary">{author}</span>
            <span>•</span>
            <span>{date}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
