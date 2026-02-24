// app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";

// Default import – matches export default in Navbar.tsx
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nino Nestor Portfolio",
  description: "Front-end Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gray-50 dark:bg-gray-950`}>
        <Navbar />               {/* ← this line must now work */}
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}