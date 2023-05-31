import "./globals.css";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "DummyLab",
  description: "Make coach life easier",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-zinc-900 h-screen items-center ">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
