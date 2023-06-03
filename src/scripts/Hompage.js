
import '../style/Homepage.css';
import avatar from '../img/avatar.png'
import regalo from '../img/regalo.png'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Recompensas from './Recompensas';

function Homepage() {
  let puntos = 50
  let nivel = 2
  let usuario = 'Profe Luévano' 
  let userData = {
    puntos: puntos,
    nivel: nivel,
    nombre: usuario,
  }
  return (
    <div className="homepage">
      <div className='usuario'>
          <div className='info'>
            <div className='text-info'>
              <p id='welcome'>Bienvenido de nuevo</p>
              <p id='nombre'>Hola {usuario}</p>
            </div>
            <img src={avatar} className="Avatar-logo" alt="avatar"/>
          </div>
      </div>
      <div className='Tarjeta'>
        <Link to='/usqr' className='link-tarjeta' state={userData}>
        <div className='texto-tarjeta'>
          <div className='up-tarjeta'>
            <p className='titulo-tarjeta'>Recompensas</p>
            <img src={regalo} className='icono-regalo' alt='regalo'/>
          </div>
          <div className='down-tarjeta'>
            <p id='puntos'>{puntos} pts</p>
            <p id='nivel'>Nivel: {nivel}</p>
            <div role='progressbar' className='progressbar'>
              <div className='progress'></div>
            </div>
          </div>
        </div>
        </Link>
      </div>
      <div className='Recompensas'>
        <div className='titulo-recompensas'>
            Mis premios
        </div>
      </div>
      <Recompensas dataFromParent={userData} />
    </div>
  );
}

export default Homepage;
