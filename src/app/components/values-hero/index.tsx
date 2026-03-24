export default function ValuesHero() {
  return (
    <section className="w-full h-[80vh] md:h-full">
      <div className="relative w-full h-full">
        <img
          src="/images/rocket.png"
          alt="rocket"
          className="w-full h-full object-cover brightness-150"
        />

        <div className="
          absolute inset-0
          flex flex-col items-center
          text-center
           pt-2 md:pt-2
          px-6
        ">
          <div className="flex flex-col pb-5 pt-10 md:max-w-[80%]">
            <h2 className="text-2xl md:text-4xl text-brand-light font-bold tracking-wider mb-2 md:mb-4">
              Missão e Visão
            </h2>
            <p className="text-white text-xl md:text-2xl tracking-wider leading-tight md:leading-relaxed">
              Ser referenciada no mercado pela qualidade dos
              nossos serviços, buscando inovações em tecnologia
              que proporcionem benefícios aos nossos clientes.
            </p>
          </div>

          <div className="flex flex-col pb-5 pt-10 md:max-w-[80%]">
            <h2 className="text-2xl md:text-4xl text-brand-light font-bold tracking-wider mb-2 md:mb-4">
              Nossos Valores
            </h2>
            <p className="text-white text-xl md:text-2xl tracking-wider leading-tight md:leading-relaxed">
              Buscamos manter sempre o respeito, a éica e a
              con iabilidade com nossos clientes e parceiros, além
              de preservar a natureza uilizando produtos
              sustentáveis.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}