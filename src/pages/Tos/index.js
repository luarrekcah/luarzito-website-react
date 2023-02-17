import React from "react";
import { Container } from "react-bootstrap";
import LuarzitoNavbar from "../../components/LuarzitoNavbar";
import LuarzitoFooter from "../../components/LuarzitoFooter";
import { Helmet } from "react-helmet";

function TermsOfService() {
  return (
    <div className="App">
      <Helmet>
        <title>Luarzito - Termos de Uso/Serviço</title>
      </Helmet>
      <LuarzitoNavbar />
      <main>
        <div className="section dark">
          <Container>
            <div>
              <h1>Termos de Uso/Serviço do Bot Discord "Luarzito"</h1>
              <p>
                Bem-vindo ao Bot Discord "Luarzito". Este bot é um recurso
                projetado para ajudar os moderadores de servidores do Discord e
                fornecer entretenimento para seus membros. Para usar o bot, você
                deve concordar com os seguintes termos:
              </p>
              <ol>
                <li>
                  O bot funciona unicamente através de comandos slash e qualquer
                  pessoa pode utilizá-lo.
                </li>
                <li>
                  O bot é fornecido "como está" e não há garantias de que ele
                  atenda a todos os requisitos ou expectativas. O desenvolvedor
                  do bot não se responsabiliza por qualquer perda ou dano
                  decorrente do uso do bot.
                </li>
                <li>
                  O mau uso do bot é estritamente proibido. Qualquer usuário que
                  violar os Termos de Serviço do bot pode ser penalizado pelo
                  desenvolvedor ou pelos administradores do servidor do Discord.
                </li>
                <li>
                  O bot é atualizado e modificado regularmente de acordo com as
                  solicitações dos usuários e ideias do desenvolvedor.
                </li>
                <li>
                  O bot é de propriedade do desenvolvedor e todas as ferramentas
                  usadas para mantê-lo são propriedade intelectual do
                  desenvolvedor.
                </li>
                <li>
                  O desenvolvedor do bot não se responsabiliza pelo mau uso do
                  bot e não é responsável por quaisquer penalidades ou sanções
                  aplicadas pelos administradores do servidor.
                </li>
                <li>
                  Qualquer informação coletada pelo bot é regida pela Política
                  de Privacidade do Bot Discord "Luarzito".
                </li>
                <li>
                  Se você tiver alguma dúvida ou preocupação sobre o uso do bot,
                  entre em contato com o desenvolvedor através do site oficial,
                  da tag Discord ou do servidor de suporte do "Luarzito".
                </li>
              </ol>
              <p>
                Se você não concorda com os Termos de Serviço do Bot Discord
                "Luarzito", por favor, não use o bot.
              </p>
            </div>
          </Container>
        </div>
      </main>
      <LuarzitoFooter />
    </div>
  );
}

export default TermsOfService;
