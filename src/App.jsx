import BotaoVerde from './components/BotaoVerde';
import CabecalhoLoja from './components/CabecalhoLoja';
import BotaoUniversal from './components/BotãoUniversal';
import CrachaVisitante from './components/CrachaVisitante';
import AvisoSistema from './components/AvisoSistema';
import ContadorLikes from './components/ContadorLikes';
import Disjuntor from './components/Disjuntor';
import CampoDigitacao from './components/CampoDigitacao';
import AcessoBancario from './components/AcessoBancario';
import SenhaSecreta from './components/SenhaSecreta';

export default function App() {
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      <CabecalhoLoja />

      <BotaoVerde />

      <BotaoUniversal textoBotao="Cadastrar" />
      <BotaoUniversal textoBotao="Login" />
      <BotaoUniversal textoBotao="Recuperar Senha" />

      <CrachaVisitante nome="Murilo" acesso="Administrador" />

      <AvisoSistema mensagem="Sistema em manutenção" corAlerta="purple" />
      <AvisoSistema mensagem="Erro crítico!" corAlerta="red" />

      <ContadorLikes />

      <Disjuntor />

      <CampoDigitacao />

      <AcessoBancario />

      <SenhaSecreta />

    </div>
  );
}