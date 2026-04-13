import { useState } from 'react';

export default function AcessoBancario() {
  const [estaLogado, setEstaLogado] = useState(false);

  return (
    <div>
      {estaLogado ? (
        <p>🔑 Bem vindo ao Dashboard</p>
      ) : (
        <button onClick={() => setEstaLogado(true)}>
          Fazer Login
        </button>
      )}
    </div>
  );
}