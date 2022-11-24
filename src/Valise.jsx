import './valise.css';
// import Vetement from './Vetement' ;


import React from 'react'

function Valise() {



  return (


    <div className='bg-sky-500	 rounded-2xl ml-3.5 mr-3.5'>
      <div className='valiseContenair'>
          <h1 className='text-center'> Ma valise :</h1>
          
         <div className='valiseListe'>
          <ul className='ml-2'>
             <li>Haut: <vetement />  </li>
             <li>Bas: <vetement /> </li>
             <li>Chaussure: <vetement /> </li>
             <li>Accessoires: <vetement />  </li>
          </ul>

         </div>
      </div>
   
    </div>

  )
}

export default Valise