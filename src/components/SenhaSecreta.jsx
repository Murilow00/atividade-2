import { useState } from 'react';

export default function SenhaSecreta() {
  const [senha, setSenha] = useState('');

  const correta = senha === 'REACT123';

  return (
    <div>
      <input
        type="text"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <p style={{ color: correta ? 'lime' : 'red' }}>
        {correta ? 'Acesso Concedido' : 'Acesso Negado!'}
      </p>
    </div>
  );
}