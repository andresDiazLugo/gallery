import React,{JSXElementConstructor, useReducer} from 'react'
import Contexto from './Context'
import {reducer} from './Reducer'
import {GET} from '../../serviceHTTP/GET.http'
import {getAllImg} from '../../direccionesHTTPS/directions.hhtps'
import  {responseServer} from '../../interface/interface'
export const initialState={
    gallery: [],
}

interface Props{
    children:React.ReactNode
}

const StateGlobal:React.FC<Props> = (props)=>{
    const [state,dispatch] = useReducer(reducer,initialState)
    const getAllGallery = async (token:responseServer)=> {
        const response:any= await GET(getAllImg,token,false)
        dispatch({
            type:String("GET_ALL_USERS"),
            payload: response
        })
    }
    return (
        <div>
            <Contexto.Provider  value={{
                gallery:state.gallery,
                getAllGallery
            }}>
                {props.children}
            </Contexto.Provider>
        </div>
    )
    
}
export default StateGlobal

