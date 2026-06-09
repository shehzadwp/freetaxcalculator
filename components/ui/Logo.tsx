import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 font-bold text-2xl text-primary hover:opacity-80 transition-opacity"
    >
      <Image
        src="/logo.svg"
        alt="FreeTaxCalculator.us logo"
        width={32}
        height={32}
        priority
      />
      <span>FreeTaxCalculator.us</span>
    </Link>
  );
}
