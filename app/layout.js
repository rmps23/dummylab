import "./globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["cyrillic"] });

export const metadata = {
  title: "DummyLab",
  description: "Make coach life easier",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-stone-950 h-screen items-center ">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
