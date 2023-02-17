import React from "react";
import LuarzitoNavbar from "../../components/LuarzitoNavbar";

function PolicyPrivacy() {
  return (
    <div className="App">
      <LuarzitoNavbar />
      <main>
        <div className="section dark">
          <div>
            <h1>Política de Privacidade do Bot Discord</h1>
            <p>
              O nosso bot Discord valoriza a privacidade dos usuários e se
              compromete a proteger suas informações pessoais. Esta política
              descreve como coletamos, usamos e divulgamos informações sobre
              você quando você usa nosso bot Discord.
            </p>
            <ol>
              <li>
                <strong>Que informações coletamos?</strong>
                <p>
                  Quando você usa nosso bot, coletamos informações que você
                  fornece diretamente, como seu nome de usuário e as informações
                  que você compartilha por meio de comandos do bot. Coletamos
                  automaticamente informações sobre como você usa o bot, como os
                  comandos que você usa e a frequência com que você interage com
                  o bot. Também podemos coletar informações sobre o dispositivo
                  que você está usando para acessar o bot, como seu endereço IP,
                  tipo de navegador e sistema operacional.
                </p>
              </li>
              <li>
                <strong>Como usamos suas informações?</strong>
                <p>
                  Usamos as informações que coletamos para fornecer e melhorar o
                  bot Discord, personalizando as interações com o bot e
                  fornecendo suporte ao cliente. Também podemos usar suas
                  informações para enviar comunicações relacionadas ao bot, como
                  atualizações ou anúncios. Não compartilhamos suas informações
                  pessoais com terceiros, exceto quando exigido por lei ou para
                  proteger nossos direitos ou propriedade.
                </p>
              </li>
              <li>
                <strong>Como protegemos suas informações?</strong>
                <p>
                  Tomamos medidas para proteger suas informações pessoais contra
                  acesso, uso ou divulgação não autorizados. Mantemos as
                  informações pessoais que coletamos apenas pelo tempo
                  necessário para os fins para os quais as coletamos.
                </p>
              </li>
              <li>
                <strong>Seus direitos e escolhas</strong>
                <p>
                  Você pode optar por não compartilhar informações pessoais com
                  o bot Discord. No entanto, isso pode afetar sua capacidade de
                  usar todos os recursos do bot. Você pode revisar, atualizar ou
                  excluir as informações pessoais que compartilhou com o bot
                  Discord a qualquer momento.
                </p>
              </li>
              <li>
                <strong>Alterações nesta política</strong>
                <p>
                  Podemos atualizar esta política de privacidade periodicamente
                  para refletir mudanças em nossas práticas de coleta e uso de
                  informações. Se fizermos alterações significativas,
                  notificaremos você por meio de uma mensagem no Discord.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PolicyPrivacy;
