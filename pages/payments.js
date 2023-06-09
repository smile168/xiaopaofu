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
    <>
      <h1 class='m-auto w-4/5 '>
        请选择以下任意一种支付方式，点击相应行的Copy按钮,然后去相应软件粘贴
      </h1>
      <table class='m-auto w-4/5 text-center'>
        <thead>
          <tr class='table-row '>
            <th scope='col' class='table-cell py-3'>
              Category
            </th>
            <th scope='col' class='table-cell py-3'>
              RegisterAs
            </th>
            <th scope='col' class='table-cell py-3'>
              SearchBy
            </th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id} class='table-row border-y-2'>
              <td class='table-cell py-3'> {payment.category}</td>
              <td class='table-cell py-3'>{payment.registerAs}</td>
              <td class='table-cell py-3'>
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
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.SERVER}/api/payments`);
  let payments = await response.json();
  return {
    props: { paymentsData: payments },
  };
}
