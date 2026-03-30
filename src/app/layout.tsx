import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";

const neris = localFont({
  src: [
    {
      path: "./fonts/neris/Neris-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/neris/Neris-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/neris/Neris-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neris",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grupo Brazlink | Soluções completas em impressão e digitalização",
  description:
    "Alugue impressoras, multifuncionais e notebooks com manutenção inclusa. É mais economia e eficiência pra sua empresa!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={neris.className}>
        {children}
      </body>
    </html>
  );
}