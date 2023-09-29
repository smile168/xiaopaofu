import Link from 'next/link';
import zgarLogo from '../public/zgar-logo.png';
import Image from 'next/image';
import vercel from '../public/vercel.svg';
import relxLogo from '../public/relx-logo.png';
import payLogo from '../public/pay-logo.png';

export default function Home() {
  return (
    <div class='flex:none bg-gray-100 sm:flex '>
      <div class='flex-1 rounded-2xl overflow-hidden shadow-lg m-8'>
        <Link href='/zgar'>
          <Image
            class='object-fill h-full w-full'
            src={zgarLogo}
            alt={vercel}
          />
        </Link>
      </div>
      <div class='flex-1 rounded-2xl overflow-hidden shadow-lg  m-8'>
        <Link href='/payments' class='h-full w-full'>
          <Image class='object-fill h-full w-full' src={payLogo} alt={vercel} />
        </Link>
      </div>
      <div class='flex-1 rounded-2xl overflow-hidden shadow-lg  m-8'>
        <Link href='https://docs.google.com/document/d/1lyYJVPiGbJaueboqTFposz97mx40t3Zgn3Gx_DN5yhI/edit?usp=sharing'>
          <Image
            class='object-fill h-full w-full'
            src={relxLogo}
            alt={vercel}
          />
        </Link>
      </div>
    </div>
  );
}
