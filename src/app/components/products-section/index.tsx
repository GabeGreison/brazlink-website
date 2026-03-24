"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import SummarySection from "../summary-section";

export default function ProductsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [active, setActive] = useState(0);

     const items = [
        "/images/products/canon-2.jpg",
        "/images/products/canon-multi.jpg",
        "/images/products/hp.jpg",
        "/images/products/kyocera.jpg",
        "/images/products/xerox.jpg"
    ];

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setActive(api.selectedScrollSnap());
    };

    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="equips" className="w-full py-16 bg-background overflow-hidden">

      <div className="max-w-5xl mx-auto text-center mb-10 px-6">
        <h2 className="text-brand-dark text-2xl md:text-4xl font-medium mb-4">
          Alguns dos nossos equipamentos:
        </h2>

        <p className="text-text text-base md:text-xl max-w-2xl mx-auto">
          As melhores marcas do mercado, garantindo performance, durabilidade e suporte técnico especializado.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">

        <Carousel
          setApi={setApi}
          opts={{ align: "center", loop: true }}
        >
          <CarouselContent className="items-center">

            {items.map((src, index) => {
              const isActive = index === active;

              return (
                <CarouselItem
                  key={index}
                  className="basis-[45%] md:basis-[35%] flex justify-center"
                >
                  <img
                    src={src}
                    alt=""
                    className={`
                      object-contain transition-all duration-300
                      ${isActive
                        ? "scale-100 z-2 opacity-100"
                        : "scale-65 z-1 opacity-40"
                      }
                      max-w-55 md:max-w-65
                    `}
                  />
                </CarouselItem>
              );
            })}

          </CarouselContent>

        
          <CarouselPrevious className="hidden md:block left-1/2 -translate-x-[700%] top-1/2 -translate-y-1/2 text-accent border-none bg-transparent hover:bg-transparent" />

          <CarouselNext className="hidden right-1/2 md:block translate-x-[700%] top-1/2 -translate-y-1/2 text-accent border-none bg-transparent hover:bg-transparent" />

        </Carousel>

      </div>
      <SummarySection/>
    </section>
  );
}