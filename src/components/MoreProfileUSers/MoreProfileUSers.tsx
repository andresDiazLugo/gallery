import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {useModal} from "../Modal/UseModal";
import {props} from '../../interface/interface'

export default function MoreProfileUSers(prop:props) {
    const {Modal,handlerShowModal,isShow} = useModal()
    const navigate = useNavigate()
    const removeTokenTedirectPath = ()=>{
        navigate("/signIn")
        window.localStorage.removeItem("token")
    }
  return (
    <div>
                        
        <div className="z-40 w-40 h-32 flex flex-col items-center gap-2 fixed bottom-36 left-3  bg-stone-400  sm:top-16 sm:left-3/4">
                <div ><h2 className="ring-offset-1 ring-2 rounded-full mt-3 text-indigo-700 p-1 font-semibold bg-red-50">{prop.username}</h2></div>
                    <Link to="/nav/profileUser"><div><h2 className="font-medium">Ver Perfil</h2></div></Link>
                        <div onClick={()=>handlerShowModal()} ><h2 className="font-medium cursor-pointer">Cerrar Sesion</h2></div>                     
                <Modal>
                    <div className="w-80 h-60 bg-zinc-50 flex flex-col justify-center gap-3 items-center">
                        <div>
                             <h2 className="font-semibold">Seguro que quieres cerrar sesion ?</h2>
                        </div>
                        <div className="flex gap-10 ">
                            <button onClick={removeTokenTedirectPath} className=" bg-lime-400 w-20 h-8 rounded-lg opacity-100">si</button>
                            <button onClick={()=> handlerShowModal()}className="bg-red-400 w-20 h-8 rounded-lg">no</button>
                        </div>
                    </div>
                </Modal>
        </div>
                              
    </div>
  )
}
