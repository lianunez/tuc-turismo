import './styles/App.css';
import {NavBar} from './Componentes/NavBar';
import {Banner} from './Componentes/Banner';
import {Inicio} from './Componentes/Inicio';
import {Conoce} from './Componentes/Conoce';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Inicio/>
      <Conoce/>
   
    </div>
  );
}

export default App;
