import "./globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["cyrillic"] });

export const metadata = {
  title: "DummyLab",
  description: "Make coach life easier",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
