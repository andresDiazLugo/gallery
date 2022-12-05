import {responseServer} from '../../interface/interface'

export const useGetToken = ():responseServer =>{
    const localstorage: string = window.localStorage.getItem('token') as string  
    return JSON.parse(localstorage)
}