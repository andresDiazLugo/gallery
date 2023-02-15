import {useEffect,useState,useContext} from "react";
import contexts from '../StateGlobal/Context'
import {useGetToken} from '../coostomHoocks/hooks'
import {GET} from '../../serviceHTTP/GET.http'
import {CreateUser} from '../../interface/interface'
import {getuserOne} from '../../direccionesHTTPS/directions.hhtps'
import {Link, NavLink,Outlet} from 'react-router-dom'
import {props} from '../../interface/interface'
import {useModal} from "../Modal/UseModal";
import {IoMenuSharp} from 'react-icons/io5'
import {GrClose} from 'react-icons/gr'
import MoreProfileUSers from "../MoreProfileUSers/MoreProfileUSers";
export default function Navegations(prop:props) {
    const {Modal,handlerShowModal,isShow} = useModal()
    const [exit, setExit] = useState<boolean>(false) 
    const [btnActive,setBtnActive] = useState<boolean>(true)
    const {getAllGallery}:any= useContext(contexts) 
    const [userProfile,setUSerProfile] = useState<CreateUser | null>()
    const token = useGetToken()
    const handleRender = ()=>{
        setBtnActive(false)
        setExit(false)
    }
    useEffect(()=>{
        (async()=>{
            const response = await GET(getuserOne,token,true)
            setUSerProfile(response)
        })()
        getAllGallery(token)  
    },[prop.renderUpdateNavigate])
    return (
        <>
            <div  className="flex relative right-6 top-9 z-20 justify-end sm:hidden animate-bounce ">
                      {btnActive ?
                      <GrClose onClick={()=> setBtnActive(!btnActive)} size="2.5rem"/>
                      :
                      <IoMenuSharp onClick={()=> setBtnActive(!btnActive)} size="2.5rem"/>
                    }
            </div>
       
        <nav  className={`bg-gray-800 z-20 h-screen fixed top-0  sm:static sm:h-fit sm:opacity-100 ${btnActive ? " translate-x-0":"translate-x-[-400px]"} ease-in-out duration-300 sm:translate-x-0`}>
            <div className="flex justify-center  h-screen  sm:h-5/6	">
                <div className=" flex flex-col items-center justify-between  sm:flex sm:flex-row sm:justify-around sm:items-center sm:w-4/5 sm:p-3">
                    <div className=" flex  gap-6 mt-8 sm:mt-0">
                        <div className=" items-center sm:block hidden ">
                            <img
                                className="hidden h-10 w-auto lg:block rounded-full"
                                src="https://w7.pngwing.com/pngs/244/798/png-transparent-gallery-image-images-photo-picture-pictures-gradient-ui-icon.png"
                                alt="Your Company"
                            />
                        </div>
                        
                            <ul className="  flex flex-col sm:flex sm:flex-row gap-5 ">
                            <NavLink to="/nav/gallery" className={({isActive})=>isActive ? "bg-gray-900 h-fit": undefined}>
                                <li   
                                    className="flex items-center text-white hover:bg-gray-700  hover:text-white  px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Galeria
                                </li>
                            </NavLink>    
                            <NavLink to="/nav/Upload" className={({isActive})=>isActive ? "bg-gray-900 h-fit ": undefined}>
                                <li  
                                    className="flex items-center text-gray-300 hover:bg-gray-700  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Subir imagenes
                                </li>
                            </NavLink>
                            <NavLink to="/nav/Administration" className={({isActive})=>isActive ? "bg-gray-900 h-fit": undefined}>
                                <li     
                                    className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Administra tus imagenes
                                </li>
                            </NavLink>
        	                <NavLink to="/nav/About" className={({isActive})=>isActive ? "bg-gray-900 h-fit": undefined}>
                                <li
                                    className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Sobre Mí
                                </li>
                            </NavLink>
                            </ul>
                        
                    </div>
                    <div className="mb-64 sm:mb-0">
                        <div className="">
                            <div>
                                 <button
                                    type="button"
                                    className="flex rounded-full  bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    id="user-menu-button"
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    onClick={()=>setExit(!exit)}
                                >
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="h-12 w-12 rounded-full"
                                        src={userProfile?.profileUrl}
                                        alt=""
                                    />
                                </button>
                                {
                                   exit && <MoreProfileUSers username={userProfile?.username} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div className="h-screen"  onClick={()=>{btnActive && setBtnActive(false)}}>
            <Outlet />
        </div>
    </>
    );
}
