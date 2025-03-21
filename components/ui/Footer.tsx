'use client';
import Image from 'next/image';
import Link from 'next/link';

const menuData = [
  {
    title: 'Invest',
    links: [
      'Stocks',
      'ETFs',
      'CFDs on Forex',
      'CFDs on Indices',
      'CFDs on Commodities',
      'Investment Plans',
      'Account and Fees',
      'Instrument specification',
      'Cashback rebates',
    ],
  },
  {
    title: 'Education',
    links: ['Educational articles', 'Market analysis', 'Market calendar', 'Help center'],
  },
  {
    title: 'About us',
    links: ['The company', 'Ambassador', 'Trading Platform', 'Contact'],
  },
  {
    title: 'Investor relations',
    links: ['News', 'Reports', 'Share Price', 'ESG'],
  },
  {
    title: 'LEGAL',
    links: [
      'Legal information',
      'Privacy Policy',
      'Regulations',
      'Risk Disclaimer',
      'Complaints procedure',
      'Company News',
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-[120px] pb-[235px]">
      <div className="container mx-auto text-center">
        <div className="mb-20">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="XTB Logo"
              width={110}
              height={40}
              priority
              style={{ width: '110px', height: '40px', objectFit: 'contain' }}
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-6 mb-16">
          {menuData.map((menu, index) => (
            <div key={index} className="flex flex-col items-start justify-start">
              <h3 className="text-sm font-bold mb-2 tracking-[.15px] px-[11px]">{menu.title}</h3>
              <ul>
                {menu.links.map((link, idx) => (
                  <li key={idx} className="flex items-center justify-start">
                    <Link
                      href="/"
                      className="text-base py-2 px-[11px] font-normal rounded-lg text-gray-60 hover:text-gray-60 hover:bg-gray-5"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
