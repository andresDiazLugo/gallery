import React from 'react'
import {useGetToken} from '../coostomHoocks/hooks'
import {Navigate} from 'react-router-dom'
import SignUp from '../Authentication/SignUp'
import SignIn from '../Authentication/SignIn'
export default function VerifyTokenPath({children}:any) {
    const token = useGetToken()
    
    if(!token){
        console.log("ssss")
        return  <SignUp/>
    }
    
    return (children)
}
