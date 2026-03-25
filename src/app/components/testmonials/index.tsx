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
            image: "/images/chama-logo.jpeg",
            name: "Fulano da Silva",
            company: "HOSPITAL CHAMA",
            subtitle: "Há 5 anos o Setor de Imagem do Hospital CHAMA trabalha com a Brazlink. Desde o início da parceria, o atendimento tem sido de excelência, sempre correspondendo às nossas expectativas. Sempre que abrimos chamado, somos atendidos com rapidez e a equipe é enviada prontamente, garantindo que nossos serviços não sejam interrompidos. É uma parceria que nos transmite confiança e segurança.",
        },
        {
            image: "/images/pestalozzi-logo.jpeg",
            name: "Ciclano da Silva",
            company: "ASSOCIAÇÃO PESTALOZZI",
            subtitle: " Por intermédio de sua representante legal, a Sra TEREZA MARIA BARRETO DO AMARAL, declara para os devidos fins que a empresa Brazlink nos presta serviços desde 2019, sempre demonstrando elevado nível de profissionalismo, competência e comprometimento.",
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

                                <div className="w-full max-w-[50%] h-62.5 md:h-87.5 flex items-center justify-center mb-6">
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


                    <CarouselPrevious className="hidden md:block translate-x-58 text-accent border-none bg-transparent hover:bg-transparent" />
                    <CarouselNext className="hidden md:block -translate-x-58 text-accent border-none bg-transparent hover:bg-transparent" />

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