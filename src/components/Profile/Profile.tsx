import React,{useEffect, useState} from 'react'
import {POSTHEADERS} from '../../serviceHTTP/POSTHEADERS'
import {useGetToken} from '../coostomHoocks/hooks'
import {uploadImgUser} from '../../direccionesHTTPS/directions.hhtps'
import BtmLoading from '../BtnLoading/BtnLoading'
import {props,CreateUser} from '../../interface/interface'
import {GET} from '../../serviceHTTP/GET.http'
import {getuserOne} from '../../direccionesHTTPS/directions.hhtps'

export default function Profile(prop:props) {
  const [loadingBtn,setLoadingBtn] = useState<boolean>(false)
  const [profileImgUser,setProfileImgUser] = useState<CreateUser|null>()
  const token = useGetToken()
  const sendFormulary = async(e:any)=>{
    e.preventDefault()
    setLoadingBtn(true)
    const body = new FormData(e.target)
    const response = await POSTHEADERS(uploadImgUser,body,token)
    if(response){
      setLoadingBtn(false)
    }
  }
useEffect(()=>{
  (async()=>{
    const response = await GET(getuserOne,token,true)
    setProfileImgUser(response)
  })()
},[prop.renderUpdateNavigate])
  return (
    <div className='w-4/4 h-fit flex  mt-40 justify-center mx-auto rounded-full'>
        <form onSubmit={sendFormulary} className="flex w-2/1 flex-col items-center justify-center space-x-6">
            <div className="shrink-0  flex justify-center">
                <img  className="h-40 w-40 object-cover rounded-full mb-4" src={profileImgUser?.profileUrl} alt="Current profile photo" />
            </div>
             <label className=" w-1/2 flex justify-center">
             <span className="sr-only">Choose profile photo</span>
                <input name="avatar" type="file" accept="image/*" className=" text-sm text-slate-500
                                file:mr-4 file:py-2 file:px-4
                                  file:border-0
                                     file:text-sm file:font-semibold
                                         file:bg-violet-50 file:text-violet-700
                                             hover:file:bg-violet-100        
                                                file:block
                                             "/>

            </label>

            <div className='w-full  flex items-center justify-center'>
                  {!loadingBtn ? <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>:
                  <BtmLoading renderUpdateNavigate={prop.renderUpdateNavigate} setRenderUpdateNavigate={prop.setRenderUpdateNavigate} />
                  }
            </div>
        </form>
    </div>
  )
}
