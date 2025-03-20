import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '@/styles/globals.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

// Metadata Integration
export const metadata: Metadata = {
  title: 'XTB - Investing, Savings, Trading | XTB',
  description: 'The financial instruments we offer, especially CFDs, can be highly risky.',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>{children}</body>
    </html>
  );
}
