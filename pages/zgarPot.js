import { useQuery } from 'react-query';

export default function ZegarPot() {
  const { isLoading, error, data } = useQuery('zgarPotsData');
  return;
}
