import WhatsappButton from "../whatsapp-button";

export default function SummarySection() {
  return (
    <section className="w-full py-20 px-6 bg-background text-center">

      <div className="max-w-3xl mx-auto">

        <h2 className="text-text font-semibold text-2xl md:text-6xl md:px-14 mb-12 tracking-wide">
          Brazlink, outsource com qualidade!
        </h2>

        <p className="text-text text-base md:text-3xl leading-relaxed tracking-wide">
          Fundada em 2006, a Brazlink Tecnologia é uma empresa inovadora que oferece aos seus clientes soluções em tecnologia de impressão e digitalização pensando na multifuncionalidade que uma empresa demanda. A empresa tem sede própria, formada por funcionários capacitados para mercado de digitalização, copiadoras e impressões. Além de contar com diversos clientes ativos e um número crescente de máquinas instaladas em diferentes cidades do nordeste. Atendendo desde o público corporativo de pequeno porte a maiores empresas sem perder o foco, compromisso e confiabilidade de seus clientes.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">

          <span className="text-brand-dark text-base md:text-3xl">
            Fale Conosco!
          </span>

          <WhatsappButton color="#1f5b8f"/>

        </div>

      </div>
    </section>
  );
}