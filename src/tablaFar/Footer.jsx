import './footer.css'
import telefono from '../img/telefono.png';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';


const Footer = () => {
  return (
    <>
	<div className='footer'>
		<div className='horario'>
			<h2>Horarios</h2>
			<h2>SERVICIOS CLÍNICOS DOMICILIOS</h2>
			<h3>Lunes a sábado:
				9:00am – 6:00pm</h3>
		</div>
		<div className='contacto'>
			<h2>Contáctanos</h2>
			<div className='cont'>
				<div className='cont1'>
					<img src={telefono} alt="" className='img-telefono' />
				</div>
			<div className='cont2'>
				<h2>302 537 98 49 - 350 815 71 96</h2>
			</div>
			</div>
				<div>
					<img src={facebook} alt="" className='redes'/>
					<img src={instagram} alt="" className='redes'/>
				</div>
			</div>
		</div>
    </>
  )
}

export default Footer