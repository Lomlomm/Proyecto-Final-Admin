
import '../style/Tarjeta.css';
import '../style/Recompensa.css'
import home from '../img/homepage.png'
import qr from '../img/qrtarjeta.png'
import { Link, useLocation } from 'react-router-dom';

const faltan = 10
function Recompensa() {
  const location = useLocation();
  const data = location.state;
  console.log(data)
  return (
    
    <div className='page'>
        <div className='header'>
            <Link to='/Proyecto-Final-Admin' className='home'>
                <div className='home'>
                    <img className='imghome' src={home}/>
                </div>
            </Link>
        </div>
        <div className='content'>
            <div className="page-tarjeta-recom">
                <div className='qr-container'>
                    <div className='up-container'>
                        <div className='titulo-qr'>{data.title}</div>
                        <div className='usuario-qr'>USUARIO</div>
                    </div>
                    
                    <div className='down-container'>
                        <div className='nivel-usuario'>NIVEL 2</div>
                        <img src={qr} className='qr'/>
                    </div>
                </div>
                <Link to='/canjeado'  state={data}>
                    <div>Click aqui para simular canjeo</div>

                </Link>
            </div>
            <div className="info-tarjeta">
                <div className='saldo'>
                    <div className='up-container'>
                        <img src={data.img} className='img-recom'/>
                        <div className='texto-saldo'>SALDO:</div>
                        <div className='puntos'>50</div>
                        <div className='puntos-disponibles'>Puntos disponibles</div>
                    </div>
                    <div className='down-container'>
                        <div className='faltante'>{data.descripcion}</div>
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

export default Recompensa;
