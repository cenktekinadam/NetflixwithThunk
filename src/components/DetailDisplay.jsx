import React from 'react'
import { baseImgUrl } from '../constans'

const DetailDisplay = ({ title, data }) => {

    return (
        <div className='mb-6'>
            <h2 className='text-xl font-semibold mb-2 '>{title}</h2>
            <div className='flex gap-5 '>{data.map((item) =>
                item.logo_path ? (<div>
                    <img className='w-[100px] h-[40px] bg-white object-contain rounded' src={baseImgUrl + item.logo_path} alt="" />
                </div>) :
                    (<span className='py-1 px-2 border ' key={item.id} > {item.name}</span>))}</div>
        </div >
    )
}

export default DetailDisplay