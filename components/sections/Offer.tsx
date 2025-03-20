'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { IconText } from '@/components/ui/IconText';
import { Heading } from '@/components/ui/Heading';
import Link from 'next/link';

const OfferContainer = styled.section``;

export default function Offer() {
  return (
    <OfferContainer className="py-8">
      <div className="container mx-auto text-center">
        <div className="flex flex-col justify-center items-center gap-y-3 mb-4">
          <IconText text="Offer" />
          <Heading>Invest your way</Heading>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          <div className="flex flex-col justify-between gap-y-2 rounded-2xl border border-xtb-blue bg-white relative overflow-hidden">
            <div className="flex flex-col items-start justify-center py-8 px-12">
              <Heading size="32" className="mb-2">
                Stocks
              </Heading>
              <p className="text-base font-normal text-gray-60 mb-2 text-left">
                More than 3000 assets from Europe and the United States
              </p>
              <Link href="/" className="flex flex-row justify-center items-center gap-x-0.5">
                <span className="text-green-60 hover:text-green-70 text-base font-bold">Find out more</span>
                <Image
                  src="/icons/find-more-arrow.svg"
                  alt="Find out more"
                  width={16}
                  height={16}
                  priority
                  style={{ width: '16px', height: '16px', marginTop: '4px', objectFit: 'contain' }}
                />
              </Link>
            </div>

            <div className="overflow-hidden ml-[21px]">
              <Image
                src="/images/stocks-retina.png"
                alt="More than 3000 assets from Europe and the United States"
                priority
                width={343}
                height={290}
              />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-2 rounded-2xl border border-xtb-blue bg-white relative overflow-hidden">
            <div className="flex flex-col items-start justify-center py-8 px-12">
              <Heading size="32" className="mb-2">
                ETFs
              </Heading>
              <p className="text-base font-normal text-gray-60 mb-2 text-left">More than 400 American and European</p>
              <Link href="/" className="flex flex-row justify-center items-center gap-x-0.5">
                <span className="text-green-60 hover:text-green-70 text-base font-bold">Find out more</span>
                <Image
                  src="/icons/find-more-arrow.svg"
                  alt="Find out more"
                  width={16}
                  height={16}
                  priority
                  style={{ width: '16px', height: '16px', marginTop: '4px', objectFit: 'contain' }}
                />
              </Link>
            </div>

            <div className="overflow-hidden ml-[21px]">
              <Image
                src="/images/dekstop-investingplans-retina.png"
                alt="More than 400 American and European"
                priority
                width={343}
                height={264}
              />
            </div>
          </div>
          <div className="flex flex-col justify-around gap-y-2 rounded-2xl border border-xtb-blue bg-white relative overflow-hidden">
            <div className="flex flex-col items-start justify-center py-8 px-12">
              <Heading size="32" className="mb-2 text-left">
                CFDs: Commodities, Indices
              </Heading>
              <p className="text-base font-normal text-gray-60 mb-2 text-left">2300+ leveraged instruments</p>
              <Link href="/" className="flex flex-row justify-center items-center gap-x-0.5">
                <span className="text-green-60 hover:text-green-70 text-base font-bold">Find out more</span>
                <Image
                  src="/icons/find-more-arrow.svg"
                  alt="Find out more"
                  width={16}
                  height={16}
                  priority
                  style={{ width: '16px', height: '16px', marginTop: '4px', objectFit: 'contain' }}
                />
              </Link>
            </div>

            <div className="overflow-hidden ml-[21px]">
              <Image
                src="/images/forex-retina.png"
                alt="2300+ leveraged instruments"
                priority
                width={343}
                height={290}
              />
            </div>
          </div>
        </div>
      </div>
    </OfferContainer>
  );
}
