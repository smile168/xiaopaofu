import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Products({ url }) {
  const [venmo, setVenmo] = useState('');
  useEffect(() => setVenmo(url), [url]);
  const clickToCopyHandler = () => {
    navigator.clipboard.writeText('jasonli110168@gmai.com');
  };
  return (
    <>
      <div>
        <Image src={venmo} alt='oops...' width='400' height='400' />
      </div>
      <button onClick={clickToCopyHandler}>click to copy</button>
      <p>hello world</p>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.SERVER}/api/products`);
  let url = await response.json();
  return {
    props: {
      url: url,
    },
  };
}
