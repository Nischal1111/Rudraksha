import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';
import Nav from "@/shared/Navbar/Nav";
import ScrollToTop from "@/shared/ScrollToTop";
import { Toaster } from "sonner";
import Footer from "@/shared/Footer/Footer";
import { Providers } from "@/store/providers";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Rudraksha",
  description: "Buy Authentic Rudraksha from Nepal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#F4F6FF] text-black">
        <body
          className={`${poppins.className} suppressHydrationWarning antialiased mx-auto max-w-screen-[2000px] bg-[#F4F6FF] text-black`}
          >
          <Providers>
            <Nav/>
            <Toaster richColors/>
            <main className="py-20">
              {children}
            </main>
            <ScrollToTop/>
            <Footer/>
          </Providers>
        </body>
    </html>
  );
}
