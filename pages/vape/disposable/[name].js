import { useRouter } from 'next/router';

export default function Disposable() {
  const router = useRouter();
  return (
    <>
      <p>{router.query.name}</p>
    </>
  );
}
