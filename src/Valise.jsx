import './valise.css';


import React from 'react'

function Valise() {



  return (


    <div className='valiseGlobal'>
        
      <div className='valiseContenair'>
          <h1 className='valiseTitle'> Ma valise :</h1>
          
         <div className='valiseListe'>
          <ul>
             <li> Haut:</li>
             <li> Bas: </li>
             <li> Chaussure: </li>
             <li> Accessoires: </li>
          </ul>

         </div>
      </div>
   
    </div>

  )
}

export default Valise