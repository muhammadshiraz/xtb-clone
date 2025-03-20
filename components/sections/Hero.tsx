'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { IconText } from '@/components/ui/IconText';

const HeroContainer = styled.section`
  background: linear-gradient(0deg, hsla(240, 4%, 95%, 0.92) -6.02%, hsla(0, 0%, 100%, 0) 112.56%);
`;

export default function Hero() {
  return (
    <HeroContainer className="text-white pt-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center gap-x-2 mb-4">
          <IconText
            icon="/icons/star.svg"
            text="1 million XTB Group Clients"
            imageProps={{ width: 16, height: 16, alt: '1 million XTB Group Clients' }}
          />
          <IconText
            icon="/icons/support.svg"
            text="24/5 Support"
            imageProps={{ width: 16, height: 16, alt: '24/5 Support' }}
          />
        </div>
        <h1 className="text-5xl font-bold mb-4 text-gray-100">Where your money works</h1>
        <p className="text-base font-normal text-gray-60 mb-8">Investing, market analysis, education</p>
        <Image
          src="/images/hero.png"
          alt="XTB Logo"
          width={89}
          height={320}
          priority
          style={{ width: '100%', height: '320px', objectFit: 'contain' }}
        />
      </div>
    </HeroContainer>
  );
}
