import React from 'react'
import logo from '../../assets/fav.png'
import logo2 from '../../assets/logo.webp'
export const Footer = () => {
    return (
        <>
         <div className="md:h-[100vh] px-5 flex flex-col justify-center items-center relative w-full">
                <img src="https://motionbgs.com/media/2837/rdr-2-animated.jpg" alt=""  className='rounded-md h-full'/>
            </div>
            <div className='py-10 border-t-1 mt-5'>
                <div className='flex flex-col items-center justify-center space-y-10 md:flex-row md:text-xl md:justify-evenly '>
                    <div className='flex justify-center w-10 items-center space-x-3'>
                        <img src={logo} alt="logo" />
                        <h2 className='text-4xl'>HIET</h2>
                    </div>
                    <div className='w-[80%] md:w-[15%]'>
                        <img src={logo2} alt="" />
                    </div>
                    <div>
                        <ul className='space-y-5 text-xl font-semibold md:flex md:space-x-4'>
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">Brochure</a>
                            </li>
                            <li>
                                <a href="">Events</a>
                            </li>
                            <li>
                                <a href="">Register</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex items-center flex-col text-2xl '>
                        <h2>Find us at:</h2>
                        <div className='flex justify-around items-center space-x-5  opacity-75'>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#" ><i className="fa-brands fa-linkedin"></i></a>
                            <a href="#"><i className="fa-brands fa-discord"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                        <h3 className='text-xl'>@hacknovate @hiet.org.in</h3>
                    </div>
                </div>
                <div className='text-center text-xs mt-5 border-t-1 mx-5 pt-5 md:text-xl md:flex justify-between md:mx-30'>
                    <h2> &copy;Copyright HIET. All rights reserved.</h2>
                    <h2>
                    Want to be a part of Hacknovate? 
                    <a href="/register" className='text-blue-500'> Click Here</a>
                    </h2>
                </div>
                <a href='https://harshportfolio21.netlify.app/' target='blank' className='text-right mx-5 mt-5 cursor-pointer block hover:text-[#515BFF]'>Created by Harsh</a>
            </div>
        </>
    )
}
