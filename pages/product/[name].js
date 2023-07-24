import { useRouter } from 'next/router';

export default function Product() {
  const router = useRouter();
  return (
    <>
      <p>{router.query.name}</p>
    </>
  );
}
