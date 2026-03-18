import Image from "next/image";

export default function Brands() {
  return (
    <section className="py-10 md:py-12 m-auto max-w-80 md:max-w-140">
      <h3 className="text-brand-dark font-semibold text-center text-2xl md:text-3xl mb-10 tracking-wider">Temos as melhores marcas</h3>
      <div className="grid grid-cols-2 gap-6 md:gap-5 justify-center ">
        <Image
          src="/images/hp-logo.png"
          alt="Hp Logo"
          width={60}
          height={60}
          className="m-auto md:w-25"
        />
        <Image
          src="/images/canon-logo.png"
          alt="Canon Logo"
          width={120}
          height={100}
          className="m-auto md:w-50 md:mr-20"
        />
        <Image
          src="/images/kyocera-logo.png"
          alt="Kyocera Logo"
          width={160}
          height={100}
          className="m-auto md:w-50"
        />
        <Image
          src="/images/xerox-logo1.png"
          alt="Xerox Logo"
          width={180}
          height={60}
          className="m-auto md:w-60"
        />
      </div>
    </section>

  );
}