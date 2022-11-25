import React from 'react'

function DisplayValise({result}) {
  return (
    <div className='bg-sky-500	 rounded-2xl ml-3.5 mr-3.5'>
      <div className='valiseContenair'>
          <h1 className='text-center'> Ma valise :</h1>
          <div className='valiseListe'>
          <ul className=' flex  justify-around flex-wrap'>
            {result.map((item) =><li>{item.cloting.dress_name} : {item.quantity} <img className=" w-20 h-20 " src={item.cloting.image_url} alt='icon'/></li>)}
          </ul>
         </div>
      </div>

    </div>

  )
}

export default DisplayValise