import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-8">
        {/* Logo Section */}
        <div className="relative w-32 h-12">
          <Link href="/" className="relative w-32 h-12">
            <Image src="/images/logo.svg" alt="XTB Logo" width={89} height={32} priority className="object-contain" />
          </Link>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-gray-600 hover:text-xtb-blue">
            Invest
          </a>
          <a href="#" className="text-gray-600 hover:text-xtb-blue">
            Education
          </a>
          <a href="#" className="text-gray-600 hover:text-xtb-blue">
            About us
          </a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 text-xtb-blue border border-xtb-blue rounded-lg">Login</button>
        <button className="px-4 py-2 bg-xtb-blue text-white rounded-lg">Try a demo</button>
      </div>
    </nav>
  );
}
