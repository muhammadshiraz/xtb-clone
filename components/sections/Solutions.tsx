'use client';
import Image from 'next/image';
import { IconText } from '@/components/ui/IconText';
import { Heading } from '@/components/ui/Heading';
import Link from 'next/link';

export default function Solutions() {
  return (
    <section className="mb-[120px]">
      <div className="container mx-auto text-center">
        <div className="flex flex-col justify-center items-center gap-y-3 mb-10">
          <IconText text="Solutions" />
          <Heading>Learn of the newest possibilities</Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border border-xtb-blue bg-white relative overflow-hidden rounded-2xl">
          {/* Text Section */}
          <div className="flex flex-col items-start justify-center py-8 px-12 h-full">
            <Heading size="32" spacing="mb-2">
              Investment plans
            </Heading>
            <p className="text-base font-normal text-gray-60 mb-4 text-left pr-14">
              Discover a smarter way of passive investing based on ETFs
            </p>
            <Link href="/" className="flex flex-row justify-center items-center gap-x-0.5">
              <span className="text-green-60 hover:text-green-70 text-base font-bold">Learn more</span>
              <Image
                src="/icons/find-more-arrow.svg"
                alt="Discover a smarter way of passive investing based on ETFs"
                width={16}
                height={16}
                priority
                className="object-contain w-[16px] h-[16px] mt-[4px]"
              />
            </Link>
          </div>

          {/* Image Section */}
          <div className="w-full">
            <Image
              src="/images/ip-hp-gbp-retina.png"
              alt="Discover a smarter way of passive investing based on ETFs"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
