const metrics = [
  { value: "20", label: "anos no mercado" },
  { value: "30%", label: "de economia para nossos clientes" },
];

export default function HeroGallery() {
  return (
    <section id="gallery" className="w-full bg-white py-20 px-6">
      <div className="max-w-240 mx-auto text-center">
        <h2 className="text-brand-dark text-2xl md:text-4xl font-light leading-snug mb-16 max-w-180 mx-auto">
          Soluções completas em impressão e digitalização para empresas que querem
          mais controle e menos desperdício.
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-60 w-1.5 bg-purple-600 rounded-md" />

          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="flex items-end gap-1 leading-none">
                <span className="text-purple-600 text-6xl md:text-8xl font-light">
                  +
                </span>
                <span className="text-brand-dark text-7xl md:text-[96px] font-semibold">
                  {metric.value}
                </span>
              </div>

              <span className="text-brand-dark text-base md:text-2xl">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}