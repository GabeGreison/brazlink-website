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
  company: string;
  subtitle: string;
};

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [active, setActive] = useState(0);

  const testimonials: Testimonial[] = [
    {
      image: "/images/ortoclinica-logo.png",
      company: "ORTOCLÍNICA",
      subtitle: "A Brazlink se destaca pela qualidade dos materiais e pela expertise técnica de sua equipe. É um parceiro estratégico que oferece qualidade excepcional e confiança em cada execução.",
    },
    {
      image: "/images/chama-logo.jpeg",
      company: "HOSPITAL CHAMA",
      subtitle: "Há 5 anos o Setor de Imagem do Hospital CHAMA trabalha com a Brazlink. Desde o início da parceria, o atendimento tem sido de excelência, sempre correspondendo às nossas expectativas. Sempre que abrimos chamado, somos atendidos com rapidez e a equipe é enviada prontamente, garantindo que nossos serviços não sejam interrompidos. É uma parceria que nos transmite confiança e segurança.",
    },
    {
      image: "/images/pestalozzi-logo.jpeg",
      company: "ASSOCIAÇÃO PESTALOZZI",
      subtitle: "Por intermédio de sua representante legal, a Sra TEREZA MARIA BARRETO DO AMARAL, declara para os devidos fins que a empresa Brazlink nos presta serviços desde 2019, sempre demonstrando elevado nível de profissionalismo, competência e comprometimento.",
    },
    {
      image: "/images/prefeitura-maragogi-logo.png",
      company: "PREFEITURA MARAGOGI",
      subtitle: "A parceria com a empresa Brazlink nos trouxe uma gestão ótima para nossas demandas de locação de impresoras e notebooks, com baixo custo e ótima qualidade",
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
    <section
      className="w-full bg-background py-20 px-6 text-center"
      aria-label="Depoimentos de clientes"
    >
      <h2 className="text-brand-light text-2xl md:text-4xl mb-10">
        Depoimentos
      </h2>

      <div className="relative max-w-4xl mx-auto">
        <Carousel
          setApi={setApi}
          opts={{ align: "center", loop: true }}
        >
          <CarouselContent>
            {testimonials.map((item, index) => (
              <CarouselItem
                key={index}
                className="flex flex-col items-center"
                role="group"
                aria-roledescription="slide"
                aria-label={`Depoimento ${index + 1} de ${testimonials.length}`}
              >
                <div className="w-full max-w-[50%] md:h-87.5 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={`Logo da empresa ${item.company}`}
                    className="object-contain h-50"
                  />
                </div>

                <div className="md:max-w-[70%]">
                  <p className="text-lg md:text-2xl mb-2 text-text">
                    {item.company}
                  </p>
                  <span className="text-brand-dark text-sm md:text-base">
                    {item.subtitle}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>


          <CarouselPrevious
            aria-label="Depoimento anterior"
            className="hidden md:block translate-x-58 text-accent border-none bg-transparent hover:bg-transparent"
          />
          <CarouselNext
            aria-label="Próximo depoimento"
            className="hidden md:block -translate-x-58 text-accent border-none bg-transparent hover:bg-transparent"
          />
        </Carousel>
      </div>


      <div
        className="flex justify-center gap-3 mt-10"
        role="tablist"
        aria-label="Selecionar depoimento"
      >
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Ir para depoimento ${index + 1}`}
            aria-selected={index === active}
            role="tab"
            className={`
              w-3 h-3 flex items-center justify-center
              rounded-full
              ${index === active ? "bg-text" : "bg-gray-400"}
            `}
          >
            <span className="sr-only">
              Depoimento {index + 1}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}