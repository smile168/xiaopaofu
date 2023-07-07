import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';

export default function CigaretteForm() {
  const router = useRouter();
  const brandRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();
  const action =
    router.query.action === 'add'
      ? { method: 'POST', button: 'Create' }
      : { method: 'PUT', button: 'Update' };
  const [cigarette, setCigarette] = useState({
    brand: '',
    name: '',
    price: 0,
    quantity: 0,
  });
  const fetchCigarrete = useCallback(async () => {
    let cigarette = {};
    if (action.method === 'PUT') {
      const endpoint = `/api/cigarette/${router.query.id}`;
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch(endpoint, options);
      cigarette = await response.json();
    }

    setCigarette(cigarette);
  }, []);
  useEffect(() => {
    fetchCigarrete();
  }, [fetchCigarrete]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const cigarette = {
      brand: event.target.brand.value,
      name: event.target.name.value,
      price: Number(event.target.price.value),
      quantity: Number(event.target.quantity.value),
    };
    const JSONdata = JSON.stringify(cigarette);
    const endpoint =
      action.method === 'POST'
        ? '/api/cigarettes'
        : `/api/cigarettes?id=${router.query.id}`;
    const options = {
      method: action.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    router.push('/cigarettes');
  };
  const handleFormChange = () => {
    const cigarette = {
      brand: brandRef.value,
      name: nameRef.value,
      price: priceRef.value,
      quantity: quantityRef.value,
    };
    setCigarette(cigarette);
  };
  const handleDelete = async () => {
    const endpoint = `/api/cigarettes?id=${router.query.id}`;
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    await fetch(endpoint, options);
    router.push('/cigarettes');
  };
  return (
    <div className='flex justify-center'>
      <form
        className='grid gap-6 my-6 md:grid-cols-2 mx-5 max-w-screen-lg basis-3/5'
        onSubmit={handleSubmit}
      >
        <div>
          <label
            className='block mb-2 text-lg font-medium text-gray-900'
            htmlFor='brand'
          >
            Brand:
          </label>
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 w-full rounded-lg h-10 text-lg font-medium'
            type='text'
            id='brand'
            name='brand'
            required
            value={cigarette.brand}
            onChange={handleFormChange}
            ref={brandRef}
          />
        </div>
        <div>
          <label
            htmlFor='name'
            className='block mb-2 text-lg font-medium text-gray-900'
          >
            Name:
          </label>
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 w-full rounded-lg h-10 text-lg font-medium'
            type='text'
            id='name'
            name='name'
            required
            value={cigarette.name}
            onChange={handleFormChange}
            ref={nameRef}
          />
        </div>
        <div>
          <label className='text-lg font-medium text-gray-900 block'>
            Avergae Price
          </label>
          <input
            type='number'
            id='price'
            name='price'
            className='bg-gray-50 border border-gray-400 text-gray-900 rounded-lg h-10 text-lg font-medium w-full'
            required
            value={cigarette.price}
            onChange={handleFormChange}
            ref={priceRef}
          />
        </div>
        <div>
          <label className='text-lg font-medium text-gray-900 block'>
            Quantity
          </label>
          <input
            type='number'
            id='quantity'
            name='quantity'
            className='bg-gray-50 border border-gray-400 text-gray-900 rounded-lg h-10 text-lg font-medium w-full'
            required
            value={cigarette.quantity}
            onChange={handleFormChange}
            ref={quantityRef}
          ></input>
        </div>
        <div className='flex'>
          <button
            type='button'
            onClick={() => {
              router.push('/cigarettes');
            }}
            className='rounded-full border border-black px-2 mx-auto font-semibold hover:bg-gray-300'
          >
            Cancel
          </button>
        </div>

        <div className='flex'>
          <button
            type='submit'
            className='rounded-full border border-black px-2 mx-auto font-semibold hover:bg-gray-300'
          >
            {action.button}
          </button>
        </div>

        <div className='flex'>
          <button
            type='button'
            onClick={handleDelete}
            className='rounded-full border border-black px-2 mx-auto font-semibold hover:bg-gray-300'
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}
