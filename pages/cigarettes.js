import { useCallback, useEffect, useState } from 'react';
import Cigarette from './cigarette';
import { useRouter } from 'next/router';

export default function Cigarettes() {
  const router = useRouter();
  const [cigarettes, setCigarettes] = useState([
    { _id: 'dummy', brand: '', name: '', price: 0, quantity: 0 },
  ]);
  const [total, setTotal] = useState({ quantity: 0, totalPrice: 0 });
  const fetchCigarretes = useCallback(async () => {
    const response = await fetch(`/api/cigarettes`);
    const updatedCigarettes = await response.json();
    setCigarettes(updatedCigarettes);
  }, []);
  useEffect(() => {
    let quantity = 0;
    let totalPrice = 0;
    cigarettes.forEach((cig) => {
      quantity += cig.quantity;
      totalPrice += cig.quantity * cig.price;
    });
    setTotal({ quantity: quantity, totalPrice: totalPrice });
  }, [cigarettes, setTotal]);
  useEffect(() => {
    fetchCigarretes();
  }, [fetchCigarretes]);
  const handleSelectCigarette = async (id) => {
    router.push({
      pathname: '/cigaretteform',
      query: { id: id, action: 'update' },
    });
  };
  return (
    <div className=''>
      <table className='table-auto center text-center w-full sm:w-1/2 mx-auto border-collapse border border-slate-600'>
        <thead>
          <tr>
            <th>brand</th>
            <th>name</th>
            <th>quantity</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {cigarettes.map((cig) => (
            <Cigarette
              cigarette={cig}
              key={cig._id}
              onSelectCigarette={handleSelectCigarette}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className='border-t-2 border-slate-900 py-2.5'>Na</td>
            <td className='border-t-2 border-slate-900 py-2.5'>Na</td>
            <td className='border-t-2 border-slate-900 py-2.5'>
              {total.quantity}
            </td>
            <td className='border-t-2 border-slate-900 py-2.5'>
              {total.totalPrice}
            </td>
          </tr>
        </tfoot>
      </table>
      <div className='flex'>
        <button
          onClick={() =>
            router.push({
              pathname: '/cigaretteform',
              query: { action: 'add' },
            })
          }
          className='rounded-full border border-black px-2 mx-auto font-semibold hover:bg-gray-300 my-2'
        >
          Add One
        </button>
      </div>
    </div>
  );
}
