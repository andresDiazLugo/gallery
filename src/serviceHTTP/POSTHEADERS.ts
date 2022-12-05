import axios from 'axios'
import {alertNotify} from '../alerts/alerts'
import {deleteLocalStorage} from '../services/deleteLocalStorage'
import {responseServer} from '../interface/interface'


export const POSTHEADERS = async(url:string,form:any,token:responseServer)=>{
    try {
        const response = await axios({
            method:'post',
            url:url,
            headers:{'auth-token':token.token},
            data:form
        })
        alertNotify(true,response.data.msg)
       return response.data
    } catch (error:any) {
        console.log(error)
        deleteLocalStorage('token')
        alertNotify(false,error.response.data.msg)
    }
}