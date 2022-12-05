import {CreateUser,responseServer} from '../interface/interface'
import axios from 'axios'
import {alertNotify} from '../alerts/alerts'
import {deleteLocalStorage} from '../services/deleteLocalStorage'

export const POST = async(url:string,form:CreateUser)=>{
    try {
        // const response= await fetch("https://localhost:4000/api/users/signup",{
        //     method:'POST',
        //     body:JSON.stringify(form) 
        // })
        const response = await axios.post(url,form)
        // console.log(response.data)
        if(response.data.token){
            localStorage.setItem('token',JSON.stringify({
                token:response.data.token,
                instance:response.data.instance
            }))
        }
        alertNotify(true, response.data.msg)
        // return response
    } catch (error) {
        deleteLocalStorage('token')
        return error        
    }
}

