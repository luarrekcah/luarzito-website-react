import logo from '../../assets/logo.png';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LuarzitoNavbar from '../../components/LuarzitoNavbar';
import LuarzitoFooter from '../../components/LuarzitoFooter';

const Home = () => {
  return (
    <div className="App">
      <LuarzitoNavbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Luarzito</h1>
        <p>Um simples bot para o Discord!</p>
      </header>
      <main>
        <div>
          a
        </div>
      </main>
      <LuarzitoFooter />
    </div>
  );
}

export default Home;
