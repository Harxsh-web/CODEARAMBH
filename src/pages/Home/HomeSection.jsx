import React from 'react'
import logo from '../../assets/logo.webp'
import { HyperText } from "@/components/magicui/hyper-text";

export const HomeSection = () => {
    return (
        <div className='homeSection w-full h-[100vh] flex justify-around items-center flex-col md:flex-row my-10 pb-30 md:pb-0'>
            <div className=' px-10 justify-center items-center z-10 '>
                <img src={logo} alt="logo" />

                <div className='text-center'>
                    <h2 className='flex flex-col  tracking-tighter mb-5'>
                        <span className='text-2xl'>Organised by</span>
                        <span className='text-6xl font-bold '>HI-TECH</span>
                        <span>Institute of Engineering & Technology</span>
                    </h2>
                <a href="" className='border-2 p-3 hover:bg-white hover:text-black font-bold text-3xl rounded-md' ><i className="fa-brands fa-discord"></i>Discord</a>
                </div>
            </div>
            <div className="p-10 justify-center items-center text-center w-full md:w-auto
                 bg-black bg-opacity-50 backdrop-blur-md
                font-bold text-4xl absolute md:relative bottom-0 md:rounded-xl" 
                 style={{ backgroundColor: window.innerWidth >= 768 ? 'rgba(0, 0, 0, 0.5)' : 'black' }}  >
                <h2 className="uppercase z-10"><HyperText>Hacking Starts</HyperText> <br /> <HyperText>now ! !</HyperText> </h2>
            </div>
            <div className='hidden md:block absolute bottom-10 text-2xl uppercase font-bold leading-10 right-40 cursor-pointer'>
                <h2>follow us</h2>
                <div className='flex justify-around items-center space-x-10 '>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#" ><i className="fa-brands fa-linkedin"></i></a>
                    <a href="#"><i className="fa-brands fa-discord"></i></a>
                    <a href="https://www.instagram.com/hitechcollege2004/ "target='blank'><i className="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
    )
}

