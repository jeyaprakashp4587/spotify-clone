import React from 'react'
import './main.css'
import Homepage from '../routers/Homepage'
import { Route, Routes } from 'react-router-dom'
import Aniruth from '../playlist/Aniruth'
import Gvplaylist from '../playlist/Gvplaylist'
import Varman from '../playlist/Varman'
import Arplaylist from '../playlist/Arplaylist'
import Jpplaylist from '../playlist/Jpplaylist'

const Main = () => {
  return (
    <div className='main-wrapper'>
        <div className="main-wrapper-header">
          <div className="arrows">
          <i class="fa-solid fa-arrow-left"></i>
          <i class="fa-solid fa-arrow-right"></i>
          </div>
          <div className="explore">
            <button>Explore Premium</button>
            <button> <i class="fa-solid fa-download"></i>Install App</button>
            <i class="fa-solid fa-bell"></i>
            <i class="fa-solid fa-user"></i>
          </div>
        </div>
     
      <div className='main-wrapper-content'>
        <Routes>
          <Route path='/' element={<Homepage />} ></Route>
          <Route path='/aniruthplaylist' element={<Aniruth />} ></Route>
          <Route path='/gvplaylist' element={<Gvplaylist />} ></Route>
          <Route path='/jpplaylist' element={<Jpplaylist />} ></Route>
          <Route path='/varmanplaylist' element={<Varman/>} ></Route>
          <Route path='/arplaylist' element={<Arplaylist />} ></Route>
        </Routes>
      </div>
    </div>
  )
}

export default Main