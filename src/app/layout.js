import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/app/components/Utilities/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anime List",
  description: "Generated Anime List",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
