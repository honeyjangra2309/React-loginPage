import { useState } from 'react'
import './App.css'
import Content from './components/Content'
import Navbar from './components/Navbar'
import { Image } from './assets'

function App() {
  const [theme, settheme] = useState("black")
  
  return (
    <div className={`${theme=="black"? "bg-primary" : "bg-myWhite" } w-full overflow-hidden flex flex-row justify-between items-center max-h-[100vh]`}>
      <div className='w-full flex flex-col justify-start items-start h-[100vh]'>
      <Navbar theme={theme} settheme={settheme} />
      <Content theme={theme} />
      </div>
      <div className='flex flex-1 justify-end items-start md:flex hidden'>
      <img src={Image} alt="design" className='max-w-[720px] max-h-[100vh] object-contain rounded-[30px]' />
      </div>
      
    </div>
  )
}

export default App
