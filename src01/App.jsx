import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Gigs from './pages/Gigs'
import Mixes from './pages/Mixes'
import Contacts from './pages/Contacts'
import Videos from './pages/Videos'
import Photos from './pages/Photos'
import { Route,Routes } from 'react-router-dom'
export default class App extends React.Component {
  render() {
    return (
      <div>
       <Routes>
        <Route path="/"element={<Home/>} />
        <Route path="/About"element={<About/>}/>
        <Route path="/Gigs"element={<Gigs/>}/>
        <Route path="/Mixes"element={<Mixes/>}/>
        <Route path="/contacts"element={<Contacts/>}/>
        <Route path="/videos"element={<Videos/>}/>
        <Route path="/photos"element={<Photos/>}/>

          </Routes>
      
      </div>
    )
  }
}
