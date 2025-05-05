import { useState } from 'react'
import './App.css'
import Header from './Header'
import SideBar from './SideBar'
import Home from './Home'

function App() {
const [openSideBarToggle, setOpenSideBarToggle] = useState(false);

const openSideBar = () => {
  setOpenSideBarToggle(!openSideBarToggle);
  console.log(openSideBarToggle);
  
}
  return (
   <div className='grid-container'>
    <Header openSideBar={openSideBar} />
    <SideBar openSideBarToggle={openSideBarToggle} openSideBar={openSideBar} />
    <Home />
   </div>
  )
}

export default App
