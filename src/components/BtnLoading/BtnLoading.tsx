import {useEffect} from 'react'
import{props} from '../../interface/interface'
export default function BtnLoading(prop:props) {
  useEffect(()=>{
    return ()=>{
      prop.setRenderUpdateNavigate(!prop.renderUpdateNavigate)
    }
  })
  return (
    <div className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
         <div className="spinner"></div>
    </div>
  )
}
