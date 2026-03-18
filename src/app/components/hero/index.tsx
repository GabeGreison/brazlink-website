import Image from "next/image";

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

          <a
            href="https://wa.me/5582993719350"
            target="_blank"
            className="
              flex items-center gap-4
              border-2 border-white
              rounded-full
              px-2 py-1
              md:px-6
            "
          >
            <Image
              src="/images/whatsapp-logo.svg"
              alt="WhatsApp"
              width={30}
              height={30}
              className="md:w-12"
            />

            <span className="text-white text-lg md:text-3xl md:tracking-wider">
              82 99371-9350
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}