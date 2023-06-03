
import '../style/Tarjeta.css';
import '../style/Recompensa.css'
import '../style/Canjeado.css'
import home from '../img/homepage.png'
import qr from '../img/qrtarjeta.png'
import { Link, useLocation } from 'react-router-dom';

const faltan = 10
function Canjeado() {
  const location = useLocation();
  const data = location.state;
  console.log(data)
  return (
    
    <div className='page'>
        <div className='header'>
            <Link to='/Bonificacion' className='home'>
                <div className='home'>
                    <img className='imghome' src={home}/>
                </div>
            </Link>
        </div>
        <div className='content'>
            <div className="page-tarjeta">
                <div className='qr-container'>
                    <div className='up-container'>
                        <div className='titulo-qr'></div>
                        <div className='usuario-qr'>USUARIO</div>
                    </div>
                    
                    <div className='down-container'>
                        <div className='nivel-usuario'>NIVEL 2</div>
                        <img src={qr} className='qr-can'/>
                    </div>
                </div>
            </div>
            <div className="info-tarjeta">
                <div className='saldo'>
                    <div className='up-container'>

                        <img src={data.img} className='img-recom-can'/>
                        <div className='texto-canjeado'>OFERTA CANJEADA CON EXITO</div>
                        <div className='texto-saldo'>SALDO:</div>
                        <div className='puntos'>52</div>
                        <div className='puntos-disponibles'>Puntos disponibles</div>
                    </div>
                    <div className='down-container'>
                        <div className='faltante'></div>
                        <div role='progressbar' className='progressbar-usqr'>
                            <div className='progress-usqr'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
  );
}

export default Canjeado;
