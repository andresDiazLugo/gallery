import axios from 'axios'
import {responseServer} from '../interface/interface'
import {alertNotify} from '../alerts/alerts'
import {deleteLocalStorage} from '../services/deleteLocalStorage'
export const GET = async(url:string,token:responseServer,boolean:boolean)=>{
   
    try {
        const response = await axios({
            method:'get',
            url: boolean ? url+token.instance : url,
            headers:{'auth-token':token.token}
        });
        // console.log(response.data)
        return response.data
    } catch (error:any) {
        deleteLocalStorage('token')
        alertNotify(false,error.response.data.msg)
        return error     
    }
}