// import { LockClosedIcon } from '@heroicons/react/20/solid'
import {comprobationToken} from './comprobationToken'
import { useState, useRef } from "react"
import {CreateUser,Props} from '../../interface/interface'
import {Link,useNavigate} from 'react-router-dom'
import { POST } from "../../serviceHTTP/POST.http"
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
import {sigIn,signUp} from '../../direccionesHTTPS/directions.hhtps'
export default function Example({activateInput, textButton, title , textdirect}:Props) {
  const [form , setForm] = useState<CreateUser>({
    username: "",
    email:"",
    profileUrl:"https://img2.freepng.es/20190529/zlu/kisspng-user-portable-network-graphics-computer-icons-clip-maco-5cee4a44750509.6929449115591204524793.jpg",
    password:""
  })
  const navigation = useNavigate()
  const inputPassword = useRef<HTMLInputElement>(null)
  const [view, setView] = useState<boolean>(false)
  const viewPassword = ()=>{
    setView(!view)
   }
  const handleInputFormOnchange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    setForm({
      ...form,
      [event.target.name]: String(event.target.value),
    })
  }
  const handleSendInfoOnSubmit=async(event:React.FormEvent)=>{
    event.preventDefault()
    console.log(textdirect)
    await POST(textdirect ?sigIn:signUp,form)
    setForm({
      ...form,
      username:"",
      email:"",
      password:"",
    })
    if(title){
      comprobationToken(navigation)
    }

  }
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto rounded-full"
              src="https://w7.pngwing.com/pngs/244/798/png-transparent-gallery-image-images-photo-picture-pictures-gradient-ui-icon.png"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-indigo-600">
              {title ? title : "Registrate"}
            </h2>
          
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSendInfoOnSubmit} >
            <input type="hidden" name="remember" defaultValue="true" onChange={handleInputFormOnchange} />
            <div className="-space-y-px rounded-md shadow-sm">
            {!activateInput && <div>
                <label htmlFor="email-address" className="sr-only">
                  username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Nombre de usuario"
                  value={form.username}
                  onChange={handleInputFormOnchange}
                />
              </div>}
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Correo "
                  value={form.email}
                  onChange={handleInputFormOnchange}
                />
              </div>
              <div className="relative  ">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={!view ? "password": "text"}
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm after:content-['*']"
                  placeholder="Contraseña"
                  value={form.password}
                  onChange={handleInputFormOnchange}
                  ref={inputPassword}
                />
                {!view?<AiFillEye onClick={viewPassword} size="1.5rem" className="absolute top-2 right-5 cursor-pointer z-10"/>:<AiFillEyeInvisible onClick={viewPassword} size="1.5rem" className="absolute top-2 right-5 cursor-pointer z-10"/>}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Link to={textdirect ? "/":"/signIn"}> <h2 className="text-base font-semibold text-indigo-600 hover:text-indigo-500">{textdirect? textdirect : "Iniciar Sesion"}</h2> </Link>
              </div>

              {/* <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  no recuerdo mi contraseña?
                </a>
              </div> */}
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 "
              >
                {textButton ? textButton : "resgitrar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}