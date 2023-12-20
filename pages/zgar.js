import zgarPot from '../public/zgar-pot.jpg';
import vercel from '../public/vercel.svg';
import Image from 'next/image';

export default function Zegar({ url }) {
  const flavor = [{ en: 'Grape' }];
  return (
    <div>
      <Image src={zgarPot} alt={vercel} class='w-full' />
      <Image src={url} alt={vercel} width={300} height={300} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.SERVER}/api/test`);
  let url = await response.json();
  return { props: { url } };
}
