import {useEffect,useRef,useState} from 'react'
import {useGetToken} from '../coostomHoocks/hooks'
import {POSTHEADERS} from '../../serviceHTTP/POSTHEADERS'
import {uploadInfo} from '../../direccionesHTTPS/directions.hhtps'
import BtnLoading from '../BtnLoading/BtnLoading'
import {props} from '../../interface/interface'
export default function Example(prop:props) {
  const inputFile = useRef<HTMLInputElement>(null)
  const [input,setInput]= useState<string[]>()
  const [loadingBtn,setLoadingBtn] = useState<boolean>(false)
  const token = useGetToken()
const handleFile = (e: React.ChangeEvent<HTMLInputElement>):void=>{
 const arrayName = []
 if(e.target.files !== null){
   for(let iterador of e?.target?.files){
     arrayName.push(iterador.name)
   }
 }
  setInput(arrayName)
}

const sendFormulary =async (e:any)=>{
  e.preventDefault()
  setLoadingBtn(true)
  const body = new FormData(e.target)
  const response = await POSTHEADERS(uploadInfo,body,token)
  if(response){
    setLoadingBtn(false)
  }
}

  return (
    <>
      <div className="flex justify-center ">
        <div className="w-4/4 mt-20">
          <div className="  mt-5 md:col-span-2 md:mt-0">
            <form  onSubmit={sendFormulary}>
              <div className=" shadow sm:overflow-hidden sm:rounded-md">
                <div className=" space-y-6 bg-white px-4 py-5 sm:p-6">            

                  <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                      Descripcion
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="title"
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="guarda tu imagen con un titulo o una descripcion"
                       
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      este campo sirve para que puedas describir mejor tus images
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">subir imagen</label>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600 ">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer  rounded-md font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>seleccionar un archivo</span>
                            <input ref={inputFile}  id="file-upload" name="avatar" type="file" multiple accept="image/*" className="sr-only" onChange={handleFile} />
                            {input?.map(e=><p className='text-emerald-600	'>{e}</p>)}
                          </label>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG,WEBP</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                 {!loadingBtn ? <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>:
                  <BtnLoading renderUpdateNavigate={prop.renderUpdateNavigate} setRenderUpdateNavigate={prop.setRenderUpdateNavigate}/>    
                  }
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

  
    </>
  )
}
