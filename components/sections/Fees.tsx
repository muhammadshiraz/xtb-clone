'use client';
import styled from 'styled-components';
import Image from 'next/image';
import { IconText } from '@/components/ui/IconText';
import { Heading } from '@/components/ui/Heading';
import Link from 'next/link';

export default function Fees() {
  return (
    <section className="mb-[120px]">
      <div className="container mx-auto text-center">
        <div className="flex flex-col justify-center items-center gap-y-3 mb-10">
          <IconText text="Fees" />
          <Heading>Less costs, more investments</Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* First Grid - 2 Columns */}
          <div className="lg:col-span-2 rounded-2xl border border-xtb-blue bg-white relative overflow-hidden pb-8">
            <Image
              src="/images/fees/dekstop-commision-retina.png"
              alt="Enjoy no commission on stocks and ETFs up to EUR 100 000 of monthly turnover, above this amount the commission is only 0.2% (min. EUR 10). Remember that 0.5% currency conversion cost may apply."
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto mb-6"
            />
            <div className="flex flex-col justify-center items-start px-6">
              <h2 className="text-[32px] font-bold mb-2 text-gray-100 text-left">0% commission*</h2>
              <p className="text-gray-600 text-base text-left tracking-[.15px]">
                Enjoy no commission on stocks and ETFs up to EUR 100 000 of monthly turnover, above this amount the
                commission is only 0.2% (min. EUR 10). Remember that 0.5% currency conversion cost may apply.
              </p>
            </div>
          </div>

          {/* Second Grid */}
          <div className="rounded-2xl border border-xtb-blue bg-white relative overflow-hidden pb-8">
            <Image
              src="/images/fees/dekstop-b-withdrawals-retina.png"
              alt="Manage funds without costs using selected payment methods"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto mb-6"
            />
            <div className="flex flex-col justify-center items-start px-6">
              <h2 className="text-xl font-bold mb-2 text-gray-100 text-left">Free deposits and withdrawals</h2>
              <p className="text-gray-600 text-base text-left tracking-[.15px]">
                Manage funds without costs using selected payment methods
              </p>
            </div>
          </div>

          {/* Third Grid */}
          <div className="rounded-2xl border border-xtb-blue bg-white relative overflow-hidden pb-8">
            <Image
              src="/images/fees/dekstop-c-account-retina.png"
              alt="Manage funds without costs using selected payment methods"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto mb-6"
            />
            <div className="flex flex-col justify-center items-start px-6">
              <h2 className="text-xl font-bold mb-2 text-gray-100 text-left">Free account opening</h2>
              <p className="text-gray-600 text-base text-left tracking-[.15px]">
                Complete the process in 15 minutes without unnecessary formalities.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="flex flex-row justify-center items-center gap-x-0.5 hover:bg-green-20 w-max mx-auto tracking-[.15px] py-[14px] px-6 rounded"
          >
            <span className="text-green-60 hover:text-green-70 text-base font-bold tracking-normal">
              View our full fees table
            </span>
            <Image
              src="/icons/find-more-arrow.svg"
              alt="View our full fees table"
              width={16}
              height={16}
              priority
              className="object-contain w-[16px] h-[16px] mt-[4px]"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
