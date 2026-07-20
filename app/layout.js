import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KOCLO AI | Surveillance Avicole Intelligente",
  description:
    "Plateforme intelligente de collecte, de validation et de surveillance avicole basée sur la vision par ordinateur.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`scroll-smooth ${inter.variable} ${geistMono.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="antialiased overflow-x-hidden bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container">
        {children}
      </body>
    </html>
  );
}
