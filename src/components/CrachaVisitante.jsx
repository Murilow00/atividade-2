export default function CrachaVisitante({ nome, acesso }) {
  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <h2>{nome}</h2>
      <p>Nível de Acesso: {acesso}</p>
    </div>
  );
}