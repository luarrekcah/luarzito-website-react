import logo from '../../assets/logo.png';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';

import LuarzitoNavbar from '../../components/LuarzitoNavbar';
import LuarzitoFooter from '../../components/LuarzitoFooter';
import LuarzitoCommands from '../../components/LuarzitoCommands';

const Home = () => {
  return (
    <div className="App">
      <LuarzitoNavbar />
      <header className="App-header">
        <Container>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Luarzito</h1>
        <p>Um simples bot para o Discord!</p>
        <Stack gap={2} className="col-md-5 mx-auto">
          <Button variant="secondary" href='https://discord.com/api/oauth2/authorize?client_id=743841329334845530&permissions=2339952782455&scope=bot%20applications.commands'>Adicionar bot no meu servidor!</Button>
          <Button variant="outline-secondary" href='#commandsSection'>Comandos</Button>
        </Stack>
        </Container>
      </header>
      <main>
        <div className='section'>
          <Container id='commandsSection'>
            <h1>Comandos</h1>
            <LuarzitoCommands />
          </Container>
        </div>
      </main>
      <LuarzitoFooter />
    </div>
  );
}

export default Home;
