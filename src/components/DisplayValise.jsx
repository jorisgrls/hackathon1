import React from 'react'

function DisplayValise({result}) {
  return (
    <div>
       <div className='flex justify-center'>
            <img className='' src='https://res.cloudinary.com/db2sa2bxv/image/upload/v1669378720/Sans_titre-1_rc0ccg.png' alt=''/>
        </div>
        <div className='valiseContenair mt-9'>
            <ul className='flex justify-around flex-wrap text-[#fff] font-semibold text-center'>
                {result.map((item) =><li>{item.clothing.dress_name} : {item.quantity} <img className=" w-20 h-20 " src={item.clothing.image_url} alt='icon'/></li>)}
            </ul>
        </div>
    </div>
  )
}

export default DisplayValise;