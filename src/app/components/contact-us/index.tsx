"use client";

export default function ContactUs() {
  return (
    <section className=" w-full bg-white pt-32 pb-20 px-6 flex justify-center">

      <div
        className="
          w-full max-w-xl
          rounded-[28px]
          border border-white/40
          backdrop-blur-md
          bg-blue-500/8
          px-6 md:px-10
          py-10
          text-center
          -mt-80
          md:-mt-110
          mb-20
          h-fit
        "
      >
        <h2 className="text-white text-3xl md:text-5xl font-light mb-8 tracking-wide">
          Fale conosco!
        </h2>

        <form className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Nome:"
            className="w-full rounded-xl px-4 py-3 bg-white text-black outline-none"
          />

          <input
            type="text"
            placeholder="Telefone:"
            className="w-full rounded-xl px-4 py-3 bg-white text-black outline-none"
          />

          <input
            type="email"
            placeholder="E-mail:"
            className="w-full rounded-xl px-4 py-3 bg-white text-black outline-none"
          />

          <textarea
            placeholder="Sua mensagem aqui:"
            rows={4}
            className="w-full rounded-xl px-4 py-3 bg-white text-black outline-none resize-none"
          />

          <div className="mt-6 flex justify-center">
            <button
              type="button"
              className="
                border border-brand-dark
                text-brand-dark
                rounded-full
                px-8 py-2
                tracking-widest
                hover:opacity-80 transition
                font-bold
                md:text-xl
              "
            >
              enviar
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}