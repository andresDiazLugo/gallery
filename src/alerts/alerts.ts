import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'
export const alertNotify = (booleano:boolean,msg:string):string | void=>{
 
    if(msg.includes("existe") || msg.includes("nueva"))return toast(msg,{
        className:"bg-orange-300",
        icon: '👏'
    })
    if(!booleano || msg.includes("correo o contraseña incorrecto") ){
        
        return toast.error(msg)
        
        }
    if(booleano){
     return toast.success(msg,{
            className:"bg-green-300",
        })
    }
}