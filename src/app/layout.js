import { Quicksand } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Anime List",
  description: "Generated Anime List",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} bg-color-dark`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
