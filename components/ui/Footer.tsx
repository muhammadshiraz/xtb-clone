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

        <div className="mb-[72px] flex flex-row items-center justify-between">
          <ul className="flex flex-row justify-between items-center gap-x-10">
            <li>
              <Link href="/" className="flex flex-row justify-center items-center gap-x-0.5">
                <span className="text-green-60 hover:text-green-70 text-base font-bold">Partnerships</span>
                <Image
                  src="/icons/find-more-arrow.svg"
                  alt="Partnerships"
                  width={16}
                  height={16}
                  priority
                  className="object-contain w-[16px] h-[16px] mt-[4px]"
                />
              </Link>
            </li>
            <li>
              <Link href="/" className="flex flex-row justify-center items-center gap-x-0.5">
                <span className="text-green-60 hover:text-green-70 text-base font-bold">Client Office</span>
                <Image
                  src="/icons/find-more-arrow.svg"
                  alt="Client Office"
                  width={16}
                  height={16}
                  priority
                  className="object-contain w-[16px] h-[16px] mt-[4px]"
                />
              </Link>
            </li>
            <li>
              <Link href="/" className="flex flex-row justify-center items-center gap-x-0.5">
                <span className="text-green-60 hover:text-green-70 text-base font-bold">XOpenHub.pro</span>
                <Image
                  src="/icons/find-more-arrow.svg"
                  alt="XOpenHub.pro"
                  width={16}
                  height={16}
                  priority
                  className="object-contain w-[16px] h-[16px] mt-[4px]"
                />
              </Link>
            </li>
          </ul>

          <Link href="/" className="flex flex-row justify-center items-center gap-x-1">
            <Image
              src="/icons/web-app.svg"
              alt="Web app"
              width={16}
              height={16}
              priority
              className="object-contain w-[16px] h-[16px] mt-[1px]"
            />
            <span className="text-green-60 hover:text-green-70 text-base font-bold">Web app</span>
          </Link>
        </div>

        <div className="flex flex-col items-start justify-start mb-4">
          <p className="text-gray-50 text-sm font-normal tracking-[0.15px] text-left">
            The financial instruments we offer, especially CFDs, can be highly risky.
          </p>
          <p className="text-gray-50 text-sm font-normal tracking-[0.15px] text-left">
            Fractional Shares (FS) is an acquired from XTB fiduciary right to fractional parts of stocks and ETFs. FS
            are not a separate financial instrument. The limited corporate rights are associated with FS.
          </p>
        </div>

        <div className="flex flex-col items-start justify-start mb-4">
          <p className="text-gray-50 text-sm font-normal tracking-[0.15px] text-left">
            You should consider whether you understand how financial instruments work and whether you can afford to take
            the high risk of losing your money.
          </p>
          <p className="text-gray-50 text-sm font-normal tracking-[0.15px] text-left">
            They may not be suitable for everyone, so please ensure you fully understand all of the risks.
          </p>
        </div>

        <div className="flex flex-col items-start justify-start mb-4">
          <p className="text-gray-50 text-sm font-normal tracking-[0.15px] text-left">
            Familiarise yourself by consulting Regulations on the Provision of Services, Order Execution Policy and
            Declaration of Investment Risk on the website:
          </p>
          <Link href="/" className="text-green-60 text-sm">
            https://www.xtb.com/int/legal-information
          </Link>
        </div>

        <div className="flex flex-col items-start justify-start mb-8">
          <p className="text-gray-50 text-sm font-normal tracking-[0.15px] text-left">
            XTB International Limited is a limited liability company established in Belize under Registration No.
            000000587 (former Registration No. 153,939) and authorized by the Financial Services Commission of Belize
            (FSC) under Registration No. 000302/35. Company address: 35 Barrack Road, 2nd Floor, Belize City, Belize,
            C.A.
          </p>
        </div>

        <div className="flex flex-col items-start justify-start mb-4">
          <p className="text-gray-50 text-sm font-normal tracking-[0.15px] text-left">
            XTB is a trademark of XTB Group. XTB Group includes but is not limited to following entities:
          </p>
          <p className="text-gray-50 text-sm font-normal tracking-[0.15px] text-left">
            XTB S.A. is authorised and regulated by the Komisja Nadzoru Finansowego (KNF) in Poland
          </p>
          <p className="text-gray-50 text-sm font-normal tracking-[0.15px] text-left">
            XTB Limited is authorised and regulated by the Financial Conduct Authority in United Kingdom
          </p>
          <p className="text-gray-50 text-sm font-normal tracking-[0.15px] text-left">
            XTB Sucursal is authorised and regulated by the Comisión Nacional del Mercado de Valores in Spain
          </p>
        </div>

        <div className="flex flex-row items-center justify-start mb-4 gap-x-2">
          <p className="text-gray-50 text-sm font-normal tracking-[0.15px] text-left">Copyright 2025 © XTB S.A.</p>
          <span className="text-gray-50">•</span>
          <Link href="/" className="flex flex-row justify-center items-center gap-x-0.5">
            <span className="text-green-60 hover:text-green-70 text-sm font-bold">Cookies settings</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
