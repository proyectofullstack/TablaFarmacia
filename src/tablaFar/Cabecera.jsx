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
            <img src='https://firebasestorage.googleapis.com/v0/b/vetrinaria-37417.appspot.com/o/TuVetExpress.jpg?alt=media&token=b2887903-309e-4652-9865-cb8174494ab1' alt="" className='img-mensaje' />
        </div>
         <div className='carrusel'>
            <img src='https://firebasestorage.googleapis.com/v0/b/vetrinaria-37417.appspot.com/o/med4.png?alt=media&token=1fd855f1-cfbd-4346-b156-6c4787e40a15' alt="" className='img-imagen1' />
            <img src='https://firebasestorage.googleapis.com/v0/b/vetrinaria-37417.appspot.com/o/med1.png?alt=media&token=a5bf5d4a-8681-40c7-b796-d08e62e4642c' alt="" className='img-imagen1' />
            <img src='https://firebasestorage.googleapis.com/v0/b/vetrinaria-37417.appspot.com/o/med3.png?alt=media&token=00327b5a-1f73-459f-bb4e-28e9142b06b3' alt="" className='img-imagen1' />
            <img src='https://firebasestorage.googleapis.com/v0/b/vetrinaria-37417.appspot.com/o/med5.png?alt=media&token=504d9bfb-2d8c-4bd1-97f3-922a708f65d6' alt="" className='img-imagen1' />
            <img src='https://firebasestorage.googleapis.com/v0/b/vetrinaria-37417.appspot.com/o/med2.png?alt=media&token=4bf85e95-548f-4ffe-be9a-b4f156884fc8' alt="" className='img-imagen1' />
            <img src='https://firebasestorage.googleapis.com/v0/b/vetrinaria-37417.appspot.com/o/med6.png?alt=media&token=e23472c8-c6be-4bbf-b1c0-8535ba3ac54e' alt="" className='img-imagen1' />
        </div> 
    </div>
   </>
  )
}

export default Cabecera