import React from 'react'
import CopyRight from "../../assets/copyright_icon.png"

const Footer = () => {
  return (
    <div className='w-full  bg-purple-800 py-5'>
        <p className='opacity-70 text-xs text-white text-center flex items-center justify-center gap-1'>Copyright <span><img src={CopyRight} className='h-3'/></span> 2024 All rights reserved | VIT Chennai</p>
    </div>
  )
}

export default Footer