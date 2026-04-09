"use client";

import { useState } from "react";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setStatus("loading");

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    const phoneNumber = "5582993719350";

    const text = `
Nome: ${name}
Telefone: ${phone || "Não informado"}
Email: ${email}

Mensagem:
${message}
    `;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");


    setName("");
    setPhone("");
    setEmail("");
    setMessage("");

    setStatus("idle");
  };

  return (
    <section className=" w-full bg-white pt-32 pb-20 px-6 flex justify-center">
      <div className="w-full max-w-xl rounded-[28px] border border-white/40 backdrop-blur-md bg-blue-500/8 px-6 md:px-10 py-10 text-center -mt-70 md:-mt-110 mb-20 h-fit">
        <h2 className="text-white text-3xl md:text-5xl font-light mb-8 tracking-wide">
          Fale conosco!
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            name="company"
            className="hidden"
            autoComplete="off"
          />

          <input
            type="text"
            placeholder="Nome:"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl px-4 py-3 bg-white text-black outline-none"
          />

          <input
            type="text"
            placeholder="Telefone:"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-xl px-4 py-3 bg-white text-black outline-none"
          />

          <input
            type="email"
            placeholder="E-mail:"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl px-4 py-3 bg-white text-black outline-none"
          />

          <textarea
            placeholder="Sua mensagem aqui:"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-xl px-4 py-3 bg-white text-black outline-none resize-none"
          />

          <div className="mt-6 flex flex-col items-center gap-3">
            <button
              type="submit"
              disabled={status === "loading"}
              className="border border-brand-dark text-brand-dark rounded-full px-8 py-2 tracking-widest hover:opacity-80 transition font-bold md:text-xl disabled:opacity-50"
            >
              {status === "loading" ? "abrindo..." : "enviar"}
            </button>

            {status === "error" && (
              <p className="text-red-400 text-sm">
                Preenche os campos obrigatórios 😄
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}