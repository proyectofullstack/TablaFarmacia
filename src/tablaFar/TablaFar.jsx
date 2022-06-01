import React, { useState, useEffect } from 'react'
import GenerarId from '../GenerarId.jsx'
import './TablaFar.css'
import www from '../img/www.png'
const TablaFar = () => {

    const [farmacia, setFarmacia] = useState([]);

    useEffect(() => {
     listFarmacias();
    }, [])

    const farmaciasApi = [
        {
          idFamacia: 1,
          nombre: 'Agromascotas El Canario Rojo',
          dirección: 'Calle 48 #54 -15',
          barrio: 'La Candelaria',
          teléfono: '604 511 2042',
          páginaWeb: 'https://bit.ly/3NZVONl',
          state: true,
          online: true
        },
        {
          idFamacia: 2,
          nombre: 'Zuluagro',
          dirección: 'Calle 104 ## 72 - 71',
          barrio: 'Doce de Octubre',
          teléfono: '604 477 2882',
          páginaWeb: 'https://bit.ly/3NGWbfw',
          state: true,
          online: true
        },
        {
          idFamacia: 3,
          nombre: 'Agro Sandiego S.A.S',
          dirección: 'Carrera 46 #39-9',
          barrio: 'La Candelaria',
          teléfono: '604 232 5828 - 312 770 8773',
          páginaWeb: 'https://bit.ly/3POzms3',
          state: true,
          online: true
        },
        {
          idFamacia: 4,
          nombre: 'Prada Sabinc®',
          dirección: 'Calle 49 #78 A 43',
          barrio: 'Laureles',
          teléfono: '604 508 5275 - 300 438 1969',
          páginaWeb: 'https://bit.ly/3wSNA2A',
          state: true,
          online: true
        },
        {
          idFamacia: 5,
          nombre: 'Animalejos',
          dirección: 'Calle 41 #63 C-116',
          barrio: 'Laureles',
          teléfono: '604 586 9041 - 313 780 3320',
          páginaWeb: 'https://bit.ly/3PMoUkT',
          state: true,
          online: true
        },
        {
          idFamacia: 6,
          nombre: 'Doctor Pet',
          dirección: 'Calle 44 ##70 - 87',
          barrio: 'Laureles',
          teléfono: '604 480 2420 - 318 827 9616',
          páginaWeb: 'https://bit.ly/3z6pST5',
          state: true,
          online: true
        },
        {
          idFamacia: 7,
          nombre: 'Huellitas La 65',
          dirección: 'Carrera 65 #76',
          barrio: 'Laureles',
          teléfono: '311 322 6903',
          páginaWeb: 'No tiene',
          state: true,
          online: true
        },
        {
          idFamacia: 8,
          nombre: 'Animal Lopolis',
          dirección: 'Calle 44 ## 92-02',
          barrio: 'La América',
          teléfono: '311 704 8989',
          páginaWeb: 'No tiene',
          state: true,
          online: true
        },
        {
          idFamacia: 9,
          nombre: 'Agrotejelo',
          dirección: 'Carrera 52 A # 53-86',
          barrio: 'Medellin, Antioquia',
          teléfono: '301 244 2685',
          páginaWeb: 'No tiene',
          state: true,
          online: true
        },
        {
          idFamacia: 10,
          nombre: 'Grupo Pet',
          dirección: 'Carrera 50 No.79 - Sur 101',
          barrio: 'Bodega 78 Stock Sur',
          teléfono: '604 605 0908',
          páginaWeb: 'No tiene',
          state: true,
          online: true
        },
      ];

      const listFarmacias = async () => {
        // const url = 'http://www.farmacia.somee.com/api/Farmacia'
    
        // const res = await fetch( url);
        // const data = await res.json();
    
        const apiFarmacia = farmaciasApi.map((far) => {
          return {
            id: far.idFamacia,
            nombre: far.nombre,
            dirección: far.dirección,
            barrio: far.barrio,
            teléfono: far.teléfono,
            páginaWeb: far.páginaWeb,
            state: far.state,
            oneline: far.online
          };
        });
    
        setFarmacia(apiFarmacia);
      };
    
  return (
    <>
    <hr></hr>
    <table className='tabla'>
      <thead className='titulos'>
        <tr>
          <th>Nombre</th>
          <th>Dirección</th>
          <th>Barrio</th>
          <th>Teléfono</th>
          <th>Página web</th>
        </tr>
      </thead>
      <tbody className='datos'>
        {farmacia.map((items) => (
          <tr key={items.id}>
            <td>{items.nombre}</td>
            <td>{items.dirección}</td>
            <td>{items.barrio}</td>
            <td>{items.teléfono}</td>
            <td><a href={items.páginaWeb}><img src={www} alt="" className='web' title='Ir a la página' /></a></td>
          </tr>
        ))}
      </tbody>
    </table>
    <hr></hr>
  </>
  )
}

export default TablaFar