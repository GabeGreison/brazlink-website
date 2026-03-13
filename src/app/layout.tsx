import "./globals.css";
import localFont from "next/font/local";

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
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={neris.className}
      >
        {children}
      </body>
    </html>
  );
}
