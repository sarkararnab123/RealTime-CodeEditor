import React from 'react'
import { Router,Route,Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import EditorPage from './pages/EditorPage'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (

    <>
    <div>
      <Toaster position='top-right' toastOptions={{
        success:{
          iconTheme:{
            primary:'#4aed88'
          }
        }
      }}></Toaster>
    </div>
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/editor/:roomId' element={<EditorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App