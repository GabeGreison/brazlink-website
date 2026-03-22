import WhatsappButton from "../whatsapp-button";

export default function Hero() {
  return (
    <section className="w-full h-[60vh] md:h-full">
      <div className="relative w-full h-full">

        <img
          src="/images/brazlink.png"
          alt="Brazlink"
          className="w-full h-full object-cover"
        />

        <div className="
          absolute inset-0
          flex flex-col items-center
          text-center
           pt-2 md:pt-2
          px-6
        ">
          <h2 className="text-white text-xl md:text-3xl md:mb-1 font-light">
            Fale Conosco!
          </h2>

            <WhatsappButton />
        </div>

      </div>
    </section>
  );
}