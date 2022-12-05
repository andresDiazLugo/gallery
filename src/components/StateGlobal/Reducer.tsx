import {Reducer,ReducerAction} from '../../interface/interface'
export const reducer = (state:any, action:any)=>{

    switch(action.type){
        case "GET_ALL_USERS":
            return{
                ...state,
                gallery: action.payload
            }
        default:
            return state
    }

}