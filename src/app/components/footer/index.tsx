"use client";

import { HomeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-background py-16 px-6 text-center">

      <div className="max-w-xl mx-auto flex flex-col items-center">
        <div className="text-text text-xl leading-relaxed mb-6">
          <p className="font-semibold text-xl">brazlink<span className="font-normal">.net</span></p>
          <p className="text-xl text-brand-dark">Rua Afonso Pena, 56</p>
          <p className="text-xl text-brand-dark">Farol - CEP 57.051-040</p>
        </div>

        
        <button className="bg-brand-dark text-white px-8 py-2 text-center rounded-full tracking-widest mb-12">
          como chegar
        </button>

      
        <h3 className="text-4xl md:text-4xl text-text font-semibold mb-8">
          Nossos canais:
        </h3>

        <div className="flex flex-col items-center gap-5 text-text">

          <div className="flex items-center gap-3">
            <Image
              src="/images/icons/instagram.svg"
              alt="WhatsApp"
              width={20}
              height={20}
              className="text-brand-dark"
            />

            <span className="text-2xl text-brand-dark font-bold">f</span>
            <span className="text-2xl text-brand-dark font-bold">in</span>

            <p className="font-semibold text-xl">brazlink<span className="font-normal">tecnologia</span></p>
          </div>

          <div className="flex items-start gap-3">
            <Image
              src="/images/icons/whatsapp.svg"
              alt="WhatsApp"
              width={20}
              height={20}
              className="text-brand-dark"
            />

            <div className="text-center leading-tight">
              <p>82 99371-9350</p>
              <span className="text-normal text-brand-light">
                comercial
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Image
              src="/images/icons/whatsapp.svg"
              alt="WhatsApp"
              width={20}
              height={20}
              className="fill-brand-dark"
            />

            <div className="text-center leading-tight">
              <p>82 99371-9285</p>
              <span className="text-normal text-brand-light">
                suporte técnico
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <HomeIcon className="w-6 h-6 text-brand-dark" />
            <p>82 3336-6683</p>
          </div>
        </div>

        <p className="text-xs text-text mt-12">
          © 2026 Grupo Brazlink. Todos os direitos reservados.
        </p>

      </div>
    </footer>
  );
}