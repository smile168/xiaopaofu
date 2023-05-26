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
    <table>
      <tbody>
        <tr>
          <th scope='col'>Category</th>
          <th scope='col'>SearchBy</th>
          <th scope='col'>registerAs</th>
        </tr>
        {payments.map((payment) => (
          <tr key={payment.id}>
            <td>{payment.category}</td>
            <td>
              <button value={payment.searchBy} onClick={clickToCopyHandler}>
                Copy
              </button>
            </td>
            <td>{payment.registerAs}</td>
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
