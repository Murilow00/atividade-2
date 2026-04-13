export default function AvisoSistema({ mensagem, corAlerta }) {
  return (
    <p style={{ color: corAlerta }}>
      {mensagem}
    </p>
  );
}