import "./globals.css";
import { Inria_Sans } from "next/font/google";

const inria_sans = Inria_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "DummyLab",
  description: "Make coach life easier",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-zinc-900 h-screen items-center">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inria_sans.className}>{children}</body>
    </html>
  );
}
