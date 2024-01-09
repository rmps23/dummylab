import "./globals.css";
import { Roboto } from "next/font/google";
import { Chakra_Petch } from "next/font/google";

const roboto = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "DummyLab",
  description: "Make coach life easier",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black h-screen items-center">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
