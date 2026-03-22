import Image from "next/image";

type WhatsappButtonProps = {
  color?: string;
};

export default function WhatsappButton({
  color = "#fff",
}: WhatsappButtonProps) {
  return (
    <a
      href="https://wa.me/5582993719350"
      target="_blank"
      style={{
        borderColor: color,
      }}
      className="flex items-center gap-4 border-2 rounded-full px-2 py-1 md:px-6"
    >
      <Image
        src="/images/whatsapp-logo.svg"
        alt="WhatsApp"
        width={30}
        height={30}
        className="md:w-12"
      />

      <span
        style={{ color }}
        className="text-lg md:text-3xl md:tracking-wider"
      >
        82 99371-9350
      </span>
    </a>
  );
}