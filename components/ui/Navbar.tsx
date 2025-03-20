'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const NavContainer = styled.div`
  background: hsla(0, 0%, 100%, 0.8);
  border-bottom: 1px solid var(--transparent-gray-10010);
  top: 0;
  position: sticky;
  backdrop-filter: blur(30px);
  transition: margin-top 0.3s ease-in;
  height: 78px;
`;

const Nav = styled.nav`
  padding: 16px 12px;
  height: 100%;
`;

const LogoWrapper = styled.div`
  width: 89px;
  height: 32px;
  position: relative;

  img {
    object-fit: contain;
    display: block;
  }
`;

const Divider = styled.div`
  background: var(--transparent-gray-10010);
  height: 16px;
  width: 1px;
`;

export default function Navbar() {
  return (
    <NavContainer>
      <Nav className="flex items-center justify-between container">
        <div className="flex items-center gap-12">
          {/* Logo Section */}
          <Link href="/" className="py-[5px]">
            <LogoWrapper>
              <Image
                src="/images/logo.svg"
                alt="XTB Logo"
                width={89}
                height={32}
                priority
                style={{ width: '89px', height: '32px', objectFit: 'contain' }}
              />
            </LogoWrapper>
          </Link>
          <div className="flex">
            <a href="/" className="text-gray-600 hover:bg-gray-5 py-[11px] px-4 text-base rounded-lg font-normal">
              Invest
            </a>
            <a href="/" className="text-gray-600 hover:bg-gray-5 py-[11px] px-4 text-base rounded-lg font-normal">
              About us
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="hover:bg-gray-5 border border-xtb-blue rounded-[4px] text-sm border-solid font-bold w-[42px] h-[42px] flex items-center justify-center">
            <Image
              src="/icons/magnifier.svg"
              alt="Global"
              width={16}
              height={16}
              priority
              style={{ width: '16px', height: '16px', objectFit: 'contain' }}
            />
          </button>
          <button className="hover:bg-gray-5 border border-xtb-blue rounded-[4px] text-sm border-solid font-bold w-[42px] h-[42px] flex items-center justify-center">
            <Image
              src="/icons/global.svg"
              alt="Global"
              width={16}
              height={16}
              priority
              style={{ width: '16px', height: '16px', objectFit: 'contain' }}
            />
          </button>
          <Divider />
          <button className="text-gray-600 hover:bg-gray-5 py-[11px] px-4 text-base rounded-lg font-normal">
            Login
          </button>
          <Divider />
          <button className="px-5 py-[10px] hover:bg-gray-5 border border-xtb-blue rounded-[4px] text-sm border-solid font-bold h-[41px] flex">
            <span>Try a demo</span>
          </button>
          <button className="px-5 py-[10px] bg-green-60 hover:bg-green-70 text-white rounded-[4px] text-sm border-solid font-bold h-[41px] flex">
            <span>Create account</span>
          </button>
        </div>
      </Nav>
    </NavContainer>
  );
}
