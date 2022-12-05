export interface CreateUser{
    id?:number
    username?: string,
    profileUrl?: string,
    email: string,
    password: string
}
export interface responseServer {
    msg?:string,
    token?: string,
    instance?:string,
}
export interface Props{
    activateInput?:boolean,
    textButton?:string,
    title?:string,
    textdirect?:string,
}
export interface GalleryImg{
    id: number,
    title:string,
    urlImg:string,
    idCloudinary: string,
    createdAt?: string,
    updateAt?:string,
    UserId?:string,
  }
export interface Prop{
    Imgs:GalleryImg,
    setImgs:any
  }
  export type props = {
    renderUpdateNavigate?: boolean
    setRenderUpdateNavigate?:any
    msg?:string,
    username?:string
}

export interface Reducer{
        gallery: [GalleryImg]
    
}
export interface ReducerAction{
    type:"string",
    payload:[GalleryImg]
}