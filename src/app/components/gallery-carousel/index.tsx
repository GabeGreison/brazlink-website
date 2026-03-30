"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect } from "react";

const videos = [
  "https://www.youtube.com/shorts/oUDlNCCV08U",
  "https://www.youtube.com/shorts/YZWpycKhEFg",
  "https://www.youtube.com/shorts/0v6YOaNFQ0A",
];

function getYoutubeId(url: string) {
  const match =
    url.match(/shorts\/([^?]+)/) ||
    url.match(/v=([^&]+)/);

  return match?.[1];
}


export default function Gallery() {

  useEffect(() => {
    import("lite-youtube-embed" as any);
  }, []);

  return (
    <section id="gallery" className="w-full bg-white py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl text-sky-800 mb-12">
        Galeria
      </h2>

      <div className="relative max-w-xl mx-auto">
        <Carousel opts={{ align: "center", loop: true }}>
          <CarouselContent>
            {videos.map((url, index) => {
              const id = getYoutubeId(url);

              return (
                <CarouselItem key={index} className="flex justify-center">
                  <div className="w-80 h-80 md:w-95 md:h-95 overflow-hidden">
                    <lite-youtube
                      videoid={id}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <CarouselPrevious className="hidden md:block -left-16 md:-left-20 text-pink-500 border-none bg-transparent hover:bg-transparent" />
          <CarouselNext className="hidden md:block -right-16 md:-right-20 text-pink-500 border-none bg-transparent hover:bg-transparent" />
        </Carousel>
      </div>
    </section>
  );
}