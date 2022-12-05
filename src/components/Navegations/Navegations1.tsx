import {useEffect,useState,useContext} from "react";
import contexts from '../StateGlobal/Context'
import {useGetToken} from '../coostomHoocks/hooks'
import {GET} from '../../serviceHTTP/GET.http'
import {CreateUser} from '../../interface/interface'
import {getuserOne} from '../../direccionesHTTPS/directions.hhtps'
import {Link, NavLink,Outlet} from 'react-router-dom'
import {props} from '../../interface/interface'
import {useModal} from "../Modal/UseModal";


export default function Navegations(prop:props) {
    const {Modal,handlerShowModal,isShow} = useModal()
    const [exit, setExit] = useState<boolean>(false) 
    const {getAllGallery}:any= useContext(contexts)
    const [changeStateGlablat,SetchangeStateGlablat] = useState<boolean>(false) 
    const [userProfile,setUSerProfile] = useState<CreateUser | null>()
    const token = useGetToken()
    useEffect(()=>{
        (async()=>{
            const response = await GET(getuserOne,token,true)
            setUSerProfile(response)
        })()
        getAllGallery(token)  
    },[prop.renderUpdateNavigate])
    return (
        <>
       
        <nav className="bg-gray-800">
            <div className=" sm:mx-auto sm:max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex sm:h-16 sm:items-center sm:justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                           
                        >
                            <span className="sr-only">Open main menu</span>

                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>

                            <svg
                                className="hidden h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img
                                className="hidden h-8 w-auto lg:block rounded-full"
                                src="https://w7.pngwing.com/pngs/244/798/png-transparent-gallery-image-images-photo-picture-pictures-gradient-ui-icon.png"
                                alt="Your Company"
                            />
                        </div>
                        <div className="sm:ml-6 sm:block">
                            <ul className="sm:flex sm:space-x-4">
                            <NavLink to="/home/Gallery" className={({isActive})=>isActive ? "bg-gray-900": undefined}>
                                <li   
                                    className=" text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Galeria
                                </li>
                            </NavLink>    
                            <NavLink to="/home/Upload" className={({isActive})=>isActive ? "bg-gray-900": undefined}>
                                <li  
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Subir imagenes
                                </li>
                            </NavLink>
                            <NavLink to="/home/Administration" className={({isActive})=>isActive ? "bg-gray-900": undefined}>
                                <li     
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Administra tus imagenes
                                </li>
                            </NavLink>
        	                <NavLink to="/home/About" className={({isActive})=>isActive ? "bg-gray-900": undefined}>
                                <li
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Sobre Mí
                                </li>
                            </NavLink>
                            </ul>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
     

                        <div  className="relative ml-3">
                            <div>
                                 <button
                                    type="button"
                                    className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    id="user-menu-button"
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    onClick={handlerShowModal}
                                >
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="h-12 w-12 rounded-full"
                                        src={userProfile?.profileUrl}
                                        alt=""
                                    />
                                </button>
                                {isShow && <Modal>
                                       <div className="w-40 h-32 flex flex-col items-center gap-2 fixed top-16 right-0 sm:right-52 bg-stone-400">
                                            <div ><h2 className="ring-offset-1 ring-2 rounded-full mt-3 text-indigo-700 p-1 font-semibold bg-red-50">{userProfile?.username}</h2></div>
                                            <Link to="/home/profileUser"><div onClick={handlerShowModal}><h2 className="font-medium">Ver Perfil</h2></div></Link>
                                            <div onClick={()=>setExit(true)} ><h2 className="font-medium">Cerrar Sesion</h2></div>
                                            {exit && 
                                            <Modal>
                                            <div className="w-80 h-60 bg-zinc-50 flex flex-col justify-center gap-3 items-center">
                                                <div>
                                                    <h2 className="font-semibold">Seguro que quieres cerrar sesion ?</h2>
                                                </div>
                                                    <div className="flex gap-10">
                                                    <button className="bg-lime-400 w-20 h-8 rounded-lg">si</button>
                                                    <button className="bg-red-400 w-20 h-8 rounded-lg">no</button>
                                                </div>
                                            </div>
                                            </Modal>}
                                       </div>
                                </Modal>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <Outlet  />
    </>
    );
}
