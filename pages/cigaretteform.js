export default function CigaretteFormHandler() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const cigarette = {
      brand: event.target.brand.value,
      name: event.target.name.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
    };
    const JSONdata = JSON.stringify(cigarette);
    const endpoint = `/api/cigarettes`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    console.log('response ' + response);
    const result = await response.json();
  };
  return (
    <div class='flex justify-center'>
      <form
        class='grid gap-6 my-6 md:grid-cols-2 mx-5 max-w-screen-lg basis-3/5'
        onSubmit={handleSubmit}
        method='post'
      >
        <div>
          <label
            class='block mb-2 text-lg font-medium text-gray-900'
            htmlFor='brand'
          >
            Brand:
          </label>
          <input
            class='bg-gray-50 border border-gray-300 text-gray-900 w-full rounded-lg h-10 text-lg font-medium'
            type='text'
            id='brand'
            name='brand'
          />
        </div>
        <div>
          <label
            htmlFor='name'
            class='block mb-2 text-lg font-medium text-gray-900'
          >
            Name:
          </label>
          <input
            class='bg-gray-50 border border-gray-300 text-gray-900 w-full rounded-lg h-10 text-lg font-medium'
            type='text'
            id='name'
            name='name'
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
            class='bg-gray-50 border border-gray-400 text-gray-900 rounded-lg h-10 text-lg font-medium w-full'
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
          ></input>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
