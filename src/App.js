import './styles.css';
import { useState } from 'react';

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="App">
      <div>
        <button onClick={() => setStep((paso) => paso - 1)}>-</button>
        <span>paso: {step}</span>
        <button onClick={() => setStep((paso) => paso + 1)}>+</button>
      </div>
      <div className="App">
        <button onClick={() => setCount((cuenta) => cuenta - step)}>-</button>
        <span>contador: {count}</span>
        <button onClick={() => setCount((cuenta) => cuenta + step)}>+</button>
      </div>
      <p>
        Fecha:{' '}
        {count === 0
          ? 'Hoy es '
          : count > 0
            ? `${count} dias a partir de hoy es: `
            : `${Math.abs(count)}  días antes de hoy fue`}
      </p>
      <p>{date.toDateString()}</p>
    </div>
  );
}
