export default function Cigarette(props) {
  const selctCigaretteHandler = () => {
    props.onSelectCigarette(props._id);
  };
  return (
    <tr key={props._id} onClick={selctCigaretteHandler}>
      <td className='border-t-2 border-slate-900 py-2.5'>{props.brand}</td>
      <td className='border-t-2 border-slate-900 py-2.5'>{props.name}</td>
      <td className='border-t-2 border-slate-900 py-2.5'>{props.quantity}</td>
      <td className='border-t-2 border-slate-900 py-2.5'>{props.price}</td>
    </tr>
  );
}
