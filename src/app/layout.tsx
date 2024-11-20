import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';
import { Provider } from "@/providers/provider";

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
          className={`${poppins.className} antialiased mx-auto max-w-screen-2xl bg-[#F4F6FF] text-black`}
          >
          <Provider>
            {children}
          </Provider>
        </body>
    </html>
  );
}
