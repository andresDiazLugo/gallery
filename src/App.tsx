import { useState } from 'react'
import Navegation from './components/Navegations/Navegations'
import SignIn from './components/Authentication/SignIn'
import SignUp from './components/Authentication/SignUp'
import Gallery from './components/gallery/Gallery'
import Upload from './components/upload/Upload'
import Admin from './components/Admin/Admin'
import About from './components/about/About'
import {Routes,Route, Navigate} from 'react-router-dom'
import VerifyTokenPath from './components/VerifyTokenPath/VerifyTokenPath'
import Profile from './components/Profile/Profile'
import {Toaster} from 'react-hot-toast'
import StateGlobal from './components/StateGlobal/StateGlobal'

function App() {
  const [renderUpdateNavigate,setRenderUpdateNavigate] = useState<boolean>(false) 

  return (
    <div>
      <Routes>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/' element={
        <VerifyTokenPath>
          <StateGlobal>
            <Navegation renderUpdateNavigate={renderUpdateNavigate}/>
          </StateGlobal>
        </VerifyTokenPath>
        }>
          <Route path='/' element={<Gallery/>} />
          <Route path='/home/Administration' element={<Admin renderUpdateNavigate={renderUpdateNavigate} setRenderUpdateNavigate={setRenderUpdateNavigate} />} />
          <Route path='/home/About' element={<About/>} />
          <Route path='/home/Upload' element={<Upload renderUpdateNavigate={renderUpdateNavigate} setRenderUpdateNavigate={setRenderUpdateNavigate} />} />
          <Route path='/home/profileUser' element={<Profile renderUpdateNavigate={renderUpdateNavigate} setRenderUpdateNavigate={setRenderUpdateNavigate}  />} />
        </Route>
        <Route path='/*' element={<Navigate to={"/"} replace={true}/>}/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
