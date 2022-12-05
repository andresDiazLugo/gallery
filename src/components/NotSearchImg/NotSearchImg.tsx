import React from 'react'
import {props} from '../../interface/interface'

export default function NotSearchImg(prop:props) {
  return (
    <div className='flex justify-center mt-56 animate-bounce'>
        <h1 className='text-white text-2xl font-semibold '>{prop.msg}</h1>
    </div>
  )
}
