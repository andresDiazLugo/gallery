import React from 'react'
import {useGetToken} from '../coostomHoocks/hooks'
import {Navigate} from 'react-router-dom'
export default function VerifyTokenPath({children}:any) {
    const token = useGetToken()

    if(!token){
        return  <Navigate to="/"/>

    }
    console.log("ssss")
    return (children)
}
