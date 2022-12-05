import {createContext} from 'react'
import {ReducerAction} from '../../interface/interface'
interface Context{
    getAllGallery:(toke:string)=>ReducerAction
}

const contexts = createContext({})
export default contexts