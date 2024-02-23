import { useEffect, useState } from 'react';
import './styles/globals.scss';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(pv => pv + 1);
    }, 1000);
  }, []);

  return (
    <>
      <p>Conteggio clic: {count}</p>
    </>
  );
}

export default App;
