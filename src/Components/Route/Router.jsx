import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import Signinform from '../../Pages/signin form/Signinform'
import Getstartedbtn from '../../Pages/getstartpage/Getstartedbtn'


const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<Signinform/>}/>
        <Route path='/getstart' element={<Getstartedbtn/>}/>
      </Routes>
    </>
  )
}

export default Router
