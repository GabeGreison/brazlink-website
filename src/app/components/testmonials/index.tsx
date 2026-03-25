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

type Testimonial = {
    image: string;
    name: string;
    company: string;
    subtitle: string;
};

export default function Testimonials() {
    const [api, setApi] = useState<CarouselApi>();
    const [active, setActive] = useState(0);

    const testimonials: Testimonial[] = [
        {
            image: "/images/test1.png",
            name: "Fulano da Silva",
            company: "Mapple Bear",
            subtitle: "Cliente desde XXX",
        },
        {
            image: "/images/test2.png",
            name: "Ciclano",
            company: "Empresa X",
            subtitle: "Cliente desde XXX",
        },
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
        <section className="w-full bg-background py-20 px-6 text-center">

            <h2 className="text-brand-light text-2xl md:text-4xl mb-10">
                Depoimentos
            </h2>

            <div className="relative max-w-4xl mx-auto">

                <Carousel setApi={setApi} opts={{ align: "center", loop: true }}>

                    <CarouselContent>

                        {testimonials.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="flex flex-col items-center"
                            >

                                <div className="w-full max-w-[50%] h-62.5 md:h-87.5 border border-gray-400 flex items-center justify-center mb-6">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="object-contain h-full"
                                    />
                                </div>


                                <div>
                                    <p className="text-lg md:text-2xl text-text">
                                        {item.name} - {item.company}
                                    </p>
                                    <span className="text-brand-dark text-sm md:text-base">
                                        {item.subtitle}
                                    </span>
                                </div>
                            </CarouselItem>
                        ))}

                    </CarouselContent>


                    <CarouselPrevious className="hidden md:block translate-y-38 translate-x-64 text-accent border-none bg-transparent hover:bg-transparent" />
                    <CarouselNext className="hidden md:block translate-y-38 -translate-x-64 text-accent border-none bg-transparent hover:bg-transparent" />

                </Carousel>

            </div>

            <div className="flex justify-center gap-3 mt-10">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={`
              w-2.5 h-2.5 rounded-full
              ${index === active ? "bg-text" : "bg-gray-400"}
            `}
                    />
                ))}
            </div>

        </section>
    );
}