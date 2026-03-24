import { ChevronDownIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full border-b border-brand-light">
      <div className="mx-auto w-full max-w-240">

        <div className="flex flex-col gap-8 md:gap-4 md:justify-between items-center py-6 md:flex-row md:items-end">

          <Image
            src="/images/brazlink-logo.svg"
            alt="Grupo Brazlink"
            width={320}
            height={200}
            priority
            className="h-auto w-55 md:w-65"
          />

          <nav className="gap-2 md:gap-4 flex items-end text-xl md:text-3xl text-brand-dark">
            <a href="#mission" className="flex items-end">
              Missão <ChevronDownIcon className="w-5 h-5 text-purple" />
            </a>

            <a href="#equips" className="flex items-end">
              Equipamentos <ChevronDownIcon className="w-5 h-5 text-purple" />
            </a>

            <a href="#gallery" className="flex items-end">
              Galeria <ChevronDownIcon className="w-5 h-5 text-purple" />
            </a>
          </nav>

        </div>

      </div>
    </header>
  );
}