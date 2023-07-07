export default function Cigarette({ cigarette, onSelectCigarette }) {
  const selctCigaretteHandler = () => {
    onSelectCigarette(cigarette._id);
  };
  return (
    <tr key={cigarette._id} onClick={selctCigaretteHandler}>
      {/* <td className='border-t-2 border-slate-900 py-2.5'>{cigarette.brand}</td> */}
      <td className='border-t-2 border-slate-900 py-2.5'>{cigarette.name}</td>
      <td className='border-t-2 border-slate-900 py-2.5'>
        {cigarette.quantity}
      </td>
      <td className='border-t-2 border-slate-900 py-2.5'>{cigarette.price}</td>
    </tr>
  );
}
