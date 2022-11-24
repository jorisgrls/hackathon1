import './valise.css';
import Vetement from './Vetement' ;


import React from 'react'

function Valise() {



  return (


    <div className='valiseGlobal'>
      <div className='valiseContenair'>
          <h1 className='valiseTitle'> Ma valise :</h1>
          
         <div className='valiseListe'>
          <ul>
             <li> Haut: <vetement />  </li>
             <li> Bas: <vetement /> </li>
             <li> Chaussure: <vetement /> </li>
             <li> Accessoires: <vetement />  </li>
          </ul>

         </div>
      </div>
   
    </div>

  )
}

export default Valise