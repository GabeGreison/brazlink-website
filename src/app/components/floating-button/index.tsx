import Image from "next/image";

export default function FloatingButton() {
  const phone = "test";
  const message = "Olá! Vim pelo site e gostaria de mais informações.";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-20 -left-80 w-full max-w-240 md:-translate-x-1/2 px-6 z-50">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-auto flex w-12 h-12 md:w-20 md:h-20 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition hover:scale-105"
      >
        <Image
          src="/images/whatsapp-logo.svg"
          alt="WhatsApp"
          width={65}
          height={65}
          className="w-10 h-10 md:w-16 md:h-16"
        />
      </a>
    </div>
  );
}