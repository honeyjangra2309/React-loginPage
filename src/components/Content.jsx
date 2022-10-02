import React from 'react'
import styles from '../style'
import { google,google_white } from '../assets'
import "../index.css"

const Content = ({theme}) => {
  return (
    <section className={`flex w-full items-center justify-center mt-6`}>
        <div className={`flex flex-col justify-center items-end`}>
           <h2 className={`${styles.heading2} ${theme=="black"? "text-myWhite": "text-myBlack"}`}>Welcome back</h2>
           <p className={`${styles.paragraph} ${theme=="black"? "text-myWhite": "text-pColor"}`}>Please enter your contact details to connect.</p>
            <form action="" className={`leading-[24px] ${styles.marginY} flex flex-col w-full`}>
                <div className={`py-4}`}>
                <label htmlFor="email" className={`text-[16px] text-myWhite font-poppins font-normal leading-[24px] ${theme=="black"? "text-myWhite": "text-myBlack"}`}>Email address : </label>
                <input type="text" placeholder='name@compagny.com' className={`w-full h-[48px] rounded-[8px] max-w-[380px] outline-none ${theme=="black"? "bg-dimGrey placeholder-dimWhite text-dimWhite border": "bg-white border_white placeholder-pColor"} placeholder-text-[16px] placeholder-leading-[24px] placeholder-font-normal placeholder-${styles.paddingX}`} />
                </div>
                <div className={`py-4`}>
                <label htmlFor="password" className={`text-[16px] text-myWhite font-poppins font-normal leading-[24px] ${theme=="black"? "text-myWhite": "text-myBlack"}`}>Password : </label>
                <input type="password" placeholder='* * * * * * * *' className={`w-full h-[48px] rounded-[8px] max-w-[380px] outline-none ${theme=="black"? "bg-dimGrey placeholder-dimWhite text-dimWhite border": "bg-white border_white placeholder-pColor"} placeholder-text-[16px] placeholder-leading-[24px] placeholder-font-normal placeholder-${styles.paddingX}`} />
                </div>
            <div className={`py-2 flex flex-row justify-between items-center`}>
                <div className={`flex flex-row justify-start items-center`}>
                    <div className={`rounded-[3px] w-[16px] h-[16px] mr-2 ${theme=="black"? "border bg-dimGrey": "border_white bg-white"}`}></div>
                    <p className={`text-[16px] font-poppins ${theme=="black"? "text-myWhite": "text-myBlack"} leading-[24px]`}>Remember me</p>
                </div>
                <h2 className={`text-[16px] ${theme=="black"? "text-myWhite": "text-myBlack"} font-poppins cursor-pointer`}>Forgot password</h2>
            </div>
            <button  className={`w-full text-[16px] rounded-[8px] mt-4 font-poppins py-[12px] ${theme=="black"? "text-myWhite bg-loginbg shadow": "text-myWhite bg-myBlack"}`}>Log in</button>
            <button className={`w-full rounded-[8px] flex flex-row justify-center items-center  mt-4 py-[12px] ${theme=="black"? "text-myWhite bg-dimGrey shadow": "text-myWhite bg-white border_white"}`}>
            {theme=="black" ? <img src={google} alt="logo" className='w-[24px] h-[24px] mr-2' /> : <img src={google_white} alt="logo" className='w-[24px] h-[24px] mr-2'/>}
                <p className={`font-poppins ${theme=="black"? "text-myWhite": "text-myBlack"} text-[16px]`}>Log in with Google</p>
            </button>
            <div className='w-full flex flex-row justify-center items-center mt-4'>
              <p className={` ${theme=="black"? "text-myWhite": "text-myBlack"} text-[16px] font-poppins font-normal mr-2`}>Don’t have an account ?</p>
              <p className={` ${theme=="black"? "text-myWhite": "text-myBlack"} text-[16px] font-poppins font-semibold cursor-pointer`}>Sign up here</p>
            </div>
            </form>
        </div>
        
       
    </section>
  )
}

export default Content