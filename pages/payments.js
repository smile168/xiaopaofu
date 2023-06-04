import { useEffect, useState } from 'react';

export default function Payments({ paymentsData }) {
  const [payments, setPayments] = useState([]);
  useEffect(() => {
    setPayments(paymentsData);
  }, [paymentsData]);
  const clickToCopyHandler = (e) => {
    navigator.clipboard.writeText(e.target.value);
  };
  return (
    <table class='m-auto w-1/2 h-5 text-center '>
      <thead>
        <tr class='table-row'>
          <th scope='col' class='table-cell'>
            Category
          </th>
          <th scope='col' class='table-cell'>
            RegisterAs
          </th>
          <th scope='col' class='table-cell'>
            SearchBy
          </th>
        </tr>
      </thead>
      <tbody>
        {payments.map((payment) => (
          <tr key={payment.id} class='table-row'>
            <td class='table-cell'> {payment.category}</td>
            <td class='table-cell'>{payment.registerAs}</td>
            <td class='table-cell'>
              <button
                value={payment.searchBy}
                onClick={clickToCopyHandler}
                class='px-4 py-1 text-sm font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'
              >
                Copy
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.SERVER}/api/payments`);
  let payments = await response.json();
  return {
    props: { paymentsData: payments },
  };
}
