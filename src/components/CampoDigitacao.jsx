import { useState } from 'react';

export default function CampoDigitacao() {
  const [termo, setTermo] = useState('');

  return (
    <div>
      <h1>{termo}</h1>

      <input
        type="text"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
      />
    </div>
  );
}