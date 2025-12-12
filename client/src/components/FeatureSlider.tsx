import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'wouter'

interface Slide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  category: string;
}

interface FeatureSliderProps {
  slides: Slide[];
}

export function FeatureSlider({ slides }: FeatureSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative aspect-[16/9] md:aspect-[21/9]">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
                <div className="max-w-3xl animate-in slide-in-from-bottom-4 duration-700 fade-in">
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase bg-accent text-accent-foreground rounded-sm">
                    {slide.category}
                  </span>
                  <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-4 text-white drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="text-lg text-gray-200 mb-6 max-w-xl hidden md:block">
                    {slide.subtitle}
                  </p>
                  <Link href={`/article/${slide.id}`}>
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-serif">
                      Read Story
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}
