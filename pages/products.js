import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Products({ url }) {
  const [venmo, setVenmo] = useState('');
  useEffect(() => setVenmo(url), [url]);
  return (
    <>
      <div>
        <Image src={venmo} alt='oops...' width='200' height='200' />
      </div>
      <p>hello world</p>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.SERVER}/api/products`);
  let url = await response.json();
  console.log(`next api call ${url}`);
  return {
    props: {
      url: url,
    },
  };
}
