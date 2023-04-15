import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Products({ url }) {
  const [venmo, setVenmo] = useState('');
  useEffect(() => setVenmo(url), []);
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
  // const response = await fetch('pages/api/products');
  let url =
    'https://xiaopaofu.s3.us-east-1.amazonaws.com/venmo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIARVH36J24UL4W6EUP%2F20230415%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230415T191442Z&X-Amz-Expires=3600&X-Amz-Signature=b33ede0bc6f810039b07702854bbb8dbc09b9f6238958bf061375122e8cbae23&X-Amz-SignedHeaders=host&x-id=GetObject'; //await response.json();
  return {
    props: {
      url: url,
    },
  };
}
