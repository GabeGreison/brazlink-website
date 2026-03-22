"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const items = [
    { title: "Vídeos Redes sociais" },
    { title: "Impressão Corporativa" },
    { title: "Digitalização de documentos" },
];

export default function Gallery() {
    return (
        <section className="w-full bg-white py-20 px-6 text-center">
            <h2 className="text-3xl md:text-4xl text-sky-800 mb-12">
                Galeria
            </h2>

            <div className="relative max-w-xl mx-auto">
                <Carousel opts={{ align: "center", loop: true }}>
                    <CarouselContent>
                        {items.map((item, index) => (
                            <CarouselItem key={index} className="flex justify-center">
                                <div className="w-80 h-80 md:w-95 md:h-95 bg-gray-200 flex items-center justify-center">
                                    <span className="text-sky-800 text-lg md:text-xl">
                                        {item.title}
                                    </span>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="hidden md:block -left-16 md:-left-20 text-pink-500 border-none bg-transparent hover:bg-transparent [&>svg]:w-10 [&>svg]:h-10" />

                    <CarouselNext className="hidden md:block -right-16 md:-right-20 text-pink-500 border-none bg-transparent hover:bg-transparent [&>svg]:w-10 [&>svg]:h-10" />
                </Carousel>
            </div>
        </section>
    );
}