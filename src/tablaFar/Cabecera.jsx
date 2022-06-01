import './cabecera.css'
import banner from '../img/banner.png';
import mensaje from '../img/mensaje.png';
import med1 from '../img/med1.png';
import med2 from '../img/med2.png';
import med3 from '../img/med3.png';
import med4 from '../img/med4.png';
import med5 from '../img/med5.png';
import med6 from '../img/med6.png';
const Cabecera = () => {

  return (
    <>
    <div className='container'>
        <div className='cont-banner'>
            <img src={banner} alt="" className='img-banner' />
        </div>
        <div className='titulo'>
            <h1>Farmacias</h1>
        </div>
        <div className='mensaje'>
            <img src={mensaje} alt="" className='img-mensaje' />
        </div>
         <div className='carrusel'>
            <img src={med4} alt="" className='img-imagen1' />
            <img src={med1} alt="" className='img-imagen1' />
            <img src={med3} alt="" className='img-imagen1' />
            <img src={med5} alt="" className='img-imagen1' />
            <img src={med2} alt="" className='img-imagen1' />
            <img src={med6} alt="" className='img-imagen1' />
        </div> 
    </div>
   </>
  )
}

export default Cabecera