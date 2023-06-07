import zgarPot from '../public/zgar-pot.jpg';
import vercel from '../public/vercel.svg';
import Image from 'next/image';

export default function Zegar() {
  return <Image src={zgarPot} alt={vercel} class='w-full' />;
}
