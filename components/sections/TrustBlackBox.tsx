'use client';
import { IconText } from '@/components/ui/IconText';
import { Heading } from '@/components/ui/Heading';

export default function TrustBlackBox() {
  return (
    <section className="mb-[120px]">
      <div className="container mx-auto text-center">
        <div className="bg-gray-100 rounded-2xl py-20 flex items-center">
          <div className="w-1/2 px-24 flex flex-col">
            <div className="flex flex-col justify-center items-start gap-y-2">
              <IconText
                text="Trust"
                className="mb-2"
                textClassName="text-gray-30"
                bgClassName="bg-gray-100"
                borderClassName="border border-gray-70"
              />
              <Heading className="text-white text-left leading-[56px]">
                🏆 Brokerage of the year according to Invest Cuffs 2024
              </Heading>
              <button className="px-6 py-[14px] mt-10 bg-green-60 hover:bg-green-70 text-white rounded-[4px] text-sm border-solid font-bold flex items-center justify-center tracking-[.15px] leading-[20px]">
                <span>Start trading</span>
              </button>
            </div>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-10 w-fit pl-8">
            <li className="w-[216px] border-l-[2px] border-green-60">
              <div className="px-4 flex flex-col justify-center items-start">
                <Heading size="32" className="text-white text-left mb-0 leading-normal">
                  1 million+
                </Heading>
                <p className="text-gray-30 text-sm font-normal tracking-[.15px]">XTB Group Clients</p>
              </div>
            </li>
            <li className="w-[216px] border-l-[2px] border-green-60">
              <div className="px-4 flex flex-col justify-center items-start">
                <Heading size="32" className="text-white text-left mb-0 leading-normal">
                  5 million+
                </Heading>
                <p className="text-gray-30 text-sm font-normal tracking-[.15px]">App downloads</p>
              </div>
            </li>
            <li className="w-[216px] border-l-[2px] border-green-60">
              <div className="px-4 flex flex-col justify-center items-start">
                <Heading size="32" className="text-white text-left mb-0 leading-normal">
                  20+
                </Heading>
                <p className="text-gray-30 text-sm font-normal tracking-[.15px] text-left">
                  Years on the market with XTB Group
                </p>
              </div>
            </li>
            <li className="w-[216px] h-[70px] border-l-[2px] border-green-60">
              <div className="px-4 flex flex-col justify-center items-start">
                <Heading size="32" className="text-white text-left mb-0 leading-normal">
                  FSC
                </Heading>
                <p className="text-gray-30 text-sm font-normal tracking-[.15px] text-left">Regulated by authorities</p>
              </div>
            </li>
            <li className="w-[216px] border-l-[2px] border-green-60">
              <div className="px-4 flex flex-col justify-center items-start">
                <Heading size="32" className="text-white text-left mb-0 leading-normal">
                  2FA
                </Heading>
                <p className="text-gray-30 text-sm font-normal tracking-[.15px] text-left">
                  Secure Two Factor Authentication login
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
