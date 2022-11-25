
import React from 'react'
import ConditionDressWeather from '../utils/ConditionDressWeather';


function Valise( {cloth} ) {
  
  return (


    <div className='bg-cyan-800	 rounded-2xl ml-3.5 mr-3.5'>
      <div className='valiseContenair'>
          <h1 className='text-center'> Ma valise :</h1>
          
         <div className='valiseListe'>
          <ul className=' flex  justify-around flex-wrap'>
            {cloth.
            map((item) =>
            <li>{item.cloting.dress_name} : {item.quantity} <img className=" w-20 h-20 " src={item.cloting.image_url} alt='icon'/>
            </li>

            )}
            
          </ul>

         </div>
      </div>
   
    </div>

  )
}

export default Valise