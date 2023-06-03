
import '../style/Tarjeta.css';
import home from '../img/homepage.png'
import qr from '../img/qrtarjeta.png'
import { Link, useLocation } from 'react-router-dom';

const faltan = 10
function Tarjeta() {
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
                        <div className='titulo-qr'>LOGO EMPRESA</div>
                        <div className='usuario-qr'>{data.nombre}</div>
                    </div>
                    
                    <div className='down-container'>
                        <div className='nivel-usuario'>NIVEL {data.nivel}</div>
                        <img src={qr} className='qr'/>
                    </div>
                </div>
            </div>
            <div className="info-tarjeta">
                <div className='saldo'>
                    <div className='up-container'>
                        <div className='texto-saldo'>SALDO:</div>
                        <div className='puntos'>{data.puntos}</div>
                        <div className='puntos-disponibles'>Puntos disponibles</div>
                    </div>
                    <div className='down-container'>
                        <div className='faltante'>Te faltan {faltan} compras para alcanzar el nivel 3 con nuevas recompensas!</div>
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

export default Tarjeta;
