import { useCallback, useEffect, useState } from 'react';
import Cigarette from './cigarette';
import { useRouter } from 'next/router';
import pinyin from 'pinyin';

export default function Cigarettes() {
  const router = useRouter();
  const [cigarettes, setCigarettes] = useState([]);
  //const [total, setTotal] = useState({ quantity: 0, totalPrice: 0 });
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [search, setSearch] = useState('');
  const fetchCigarretes = useCallback(async () => {
    const response = await fetch(`/api/cigarettes`);
    const updatedCigarettes = await response.json();
    updatedCigarettes.sort((a, b) => a.brand.localeCompare(b.brand));
    setCigarettes(updatedCigarettes);
  }, []);
  const filterCigarettes = cigarettes.filter((cig) => {
    return (
      cig.name.toLowerCase().includes(search) ||
      cig.brand.toLowerCase().includes(search) ||
      pinyin(cig.brand, { style: pinyin.STYLE_NORMAL })
        .join('')
        .includes(search) ||
      pinyin(cig.name, { style: pinyin.STYLE_NORMAL })
        .join('')
        .includes(search) ||
      pinyin(cig.brand, { style: pinyin.STYLE_INITIALS })
        .join('')
        .includes(search) ||
      pinyin(cig.name, { style: pinyin.STYLE_INITIALS })
        .join('')
        .includes(search)
    );
  });
  useEffect(() => {
    let quantity = 0;
    let totalPrice = 0;
    filterCigarettes.forEach((cig) => {
      quantity += cig.quantity;
      totalPrice += cig.quantity * cig.price;
    });
    //setTotal({ quantity: quantity, totalPrice: totalPrice });
    setTotalQuantity(quantity);
    setTotalPrice(totalPrice);
    // console.log(quantity, totalPrice);
  }, [filterCigarettes]);
  useEffect(() => {
    fetchCigarretes();
  }, [fetchCigarretes]);
  const handleSelectCigarette = async (id) => {
    router.push({
      pathname: '/admin/cigaretteform',
      query: { id: id, action: 'update' },
    });
  };
  const handleSearchChange = (event) => {
    setSearch(event.target.value.toLowerCase());
  };
  return (
    <div className='flex flex-col text-center'>
      <div className=''>
        <button
          onClick={() =>
            router.push({
              pathname: '/admin/cigaretteform',
              query: { action: 'add' },
            })
          }
          className='rounded-full border border-black px-2 mx-5 font-semibold hover:bg-gray-300 my-2'
        >
          Add One
        </button>
        <input
          type='search'
          id='serach'
          name='search'
          className='mx-auto my-2 p-2 bg-gray-50 border border-gray-300 rounded-lg '
          value={search}
          onChange={handleSearchChange}
          placeholder='品牌 名称 中文 拼音'
        ></input>
      </div>

      <table className='table-auto center text-center w-full sm:w-1/2 mx-auto border-collapse border border-slate-600'>
        <thead>
          <tr>
            <th className='border-t-2 border-slate-900 py-2.5'>品牌</th>
            <th className='border-t-2 border-slate-900 py-2.5'>名字</th>
            <th className='border-t-2 border-slate-900 py-2.5'>单位(条)</th>
            <th className='border-t-2 border-slate-900 py-2.5'>成本</th>
          </tr>
        </thead>
        <tbody>
          {filterCigarettes.map((cig) => (
            <Cigarette
              _id={cig._id}
              brand={cig.brand}
              name={cig.name}
              price={cig.price}
              quantity={cig.quantity}
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
              {totalQuantity}
            </td>
            <td className='border-t-2 border-slate-900 py-2.5'>{totalPrice}</td>
          </tr>
        </tfoot>
      </table>
      <div className='flex'></div>
    </div>
  );
}
