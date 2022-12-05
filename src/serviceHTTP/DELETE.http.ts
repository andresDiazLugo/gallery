import axios from 'axios'
import {responseServer} from '../interface/interface'
import {alertNotify} from '../alerts/alerts'
import {deleteLocalStorage} from '../services/deleteLocalStorage'
export const DELETE = async(url:string,token:responseServer)=>{
   
    try {
        const response = await axios({
            method:'delete',
            url:url,
            headers:{'auth-token':token.token}
        });
        alertNotify(true,response.data.msg)
        return response.data
    } catch (error:any) {
        deleteLocalStorage('token')
        alertNotify(false,error.response.data.msg)
        return error     
    }
}