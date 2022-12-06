import {useContext} from 'react'
import {RiDeleteBin2Fill} from 'react-icons/ri'
import contexts from '../StateGlobal/Context'
import {GalleryImg} from '../../interface/interface'
import { DELETE } from '../../serviceHTTP/DELETE.http'
import {useGetToken} from '../coostomHoocks/hooks'
import {deleteImg} from '../../direccionesHTTPS/directions.hhtps'
import {props} from '../../interface/interface'
import NotSearchImg from '../NotSearchImg/NotSearchImg'


export default function Admin(prop:props) {
 
  const {gallery}:any = useContext(contexts)
  const token = useGetToken()
  const handleDeleteImg = async(id:string)=>{
      await DELETE(deleteImg+"/"+id,token)
  }
  const handleStateChangeImg= async(id:string)=>{
    await handleDeleteImg(id)
    prop.setRenderUpdateNavigate(!prop.renderUpdateNavigate)
  }
  if(!gallery.length){
    return (<NotSearchImg msg="No hay registros existentes"/>)
  }
  return (
    <div className='flex justify-center mt-10 '>
     { <table>
        <thead>
          <tr className='bg-slate-100 border-inherit '>
            <th className=' p-2 border-1 border-inherit font-semibold text-base'>Descripcion o titulo</th>
            <th className=' p-2 border-1  border-inherit font-semibold text-base'>Fecha de subida</th>
            <th className=' p-2 border-1  border-inherit font-semibold text-base'></th>
          </tr>
        </thead>
        <tbody>
            {gallery.length >0 && gallery?.map((e:GalleryImg)=>{
               return <tr key={e.id} className='border-inherit divide-y '>
                          {/* <td className=' font-semibold bg-white	p-1 text-center text-sm flex items-center gap-2'><img className='  rounded-lg w-5 ' src={e.urlImg}/> {e.}</td> */}
                          <td  className='  font-semibold bg-white p-1  break-all w-30 text-center text-sm flex items-center gap-2'><img className='  rounded-lg w-6  h-6' src={e.urlImg}/>{!e.title ? "no tinen descipcion":e.title}</td>
                          <td  className='  font-semibold bg-white p-1 text-center text-sm'>{e.createdAt?.split("T")[0].split("")}</td>
                          <td  className='	font-semibold bg-white p-1 text-center text-sm'><RiDeleteBin2Fill className='cursor-pointer' onClick={()=>handleStateChangeImg(String(e.idCloudinary))} color='red' size="1.3rem"/></td>   
                      </tr>
                 })
              } 
          </tbody>
       
      </table>}
    </div>
  )
}
