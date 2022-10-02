import React from 'react'
import {logo, logoWhite} from '../assets/index'
import styles from '../style'
import "../index.css"

const Navbar = ({theme,settheme}) => {
  const changeTheme = () => {
    if(theme=="black")
    {
      settheme("white");
    }
    else
    {
      settheme("black");
    }
  }
  return (
    <nav className={` w-[50vw] flex flex-row justify-between items-center flex-wrap navbar`}>
         <div className={`${styles.flexStart} items-center mx-5 mt-12`}>
            {theme=="black" ? <img src={logo} alt="logo" className='w-[24px] h-[24px] mr-2' /> : <img src={logoWhite} alt="logo" className='w-[24px] h-[24px] mr-2'/>}
            <h2 className={`text-[24px] ${theme=="black"? "text-myWhite": "text-myBlack"} cursor-pointer font-raleway`}>nameless</h2>
         </div>
         <label id="switch" className="switch mt-12 mx-12">
            <input type="checkbox" onChange={changeTheme} id="slider" />
            <span className="slider round"></span>
        </label>
    </nav>
  )
}

export default Navbar