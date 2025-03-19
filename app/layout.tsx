import type { Metadata } from 'next';
import { Roboto } from "next/font/google";
import '@/styles/globals.css';

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: 'XTB - Investing, Savings, Trading | XTB',
  description: 'The financial instruments we offer, especially CFDs, can be highly risky.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
