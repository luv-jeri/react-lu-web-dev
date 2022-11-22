import './Button.css';

export default function Button({ children, click }) {
  return (
    <button onClick={click} className='cus-button'>
      {children}
    </button>
  );
}
