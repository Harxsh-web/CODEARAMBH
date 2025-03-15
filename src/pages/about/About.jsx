import React from 'react'
import about from '../../assets/AboutIMG.webp'
import logo from '../../assets/Logo.webp'
import bg from '../../assets/bg.jpg'
export const About = () => {
    return (
        <>
            {/* first section */}
            <div className='flex px-7 aboutSection py-5'>
                <div className='text-center md:text-left md:w-[90%] px-3'>
                    <h2 className='font-bold text-3xl mb-10 '>About HIET</h2>
                    <p>HI-TECH Institute of Engineering & Technology (HIET), (AKTU College Code 220), a self-financed institute
                        embarked on its mission in the field of Technical Education in the year 2007. It is situated on a prominent
                        location at NE-3, Crossings Republik, Ghaziabad. It is approved by AICTE, New Delhi and affiliated to Dr. APJ
                        Abdul Kalam Technical University, Lucknow, Uttar Pradesh. Presently we have the following undergraduate programs
                        in B. Tech. - CSE, IT, CSE (AI), CSE (Data Science), & CSE (IoT), B. Pharma and post graduate program in MCA.
                        It's B.Tech. - CSE and IT are NBA accredited branches.</p>
                    <br /> <p>
                        Teaching learning atmosphere in the campus has shown its impact on overall performance of the students
                        in Smart India Hackathon consistently with consolation prize in 2017, three runner-up Teams in 2018, one
                        Team Winner each in 2019 and 2020, two Team winners in 2022 and three Team winners in 2023. HIETs'
                        Institutions Innovation Council (IIC), established under the direction and norms of Innovation Cell,
                        Ministry of Education, Govt. of India, which is consistently performing well. In 2022, the Institute has
                        set up an AI based Centre of Excellence in association with NVIDIA for students and faculty where they'll
                        be provided exposure to industry standards with high-quality in a competitive and challenging environment.
                        This is the first-of-its-kind Centre of Excellence established in any private institute in affiliating
                        university of Dr. APJ Abdul Kalam Technical University, Lucknow, and NCR Region.
                    </p>
                </div>
                <div className='hidden md:block '>
                    <img src="https://shiksha-static-mediadata.s3.ap-southeast-1.amazonaws.com/mediadata/reviewDocument/images/1677174417672maxresdefault.jpg" alt=""
                        className='object-cover' />
                </div>
            </div>
            {/* second Section */}
            <div className='aboutSection flex p-5 items-center justify-around'>
                <div className='hidden md:block'>
                    <img src='https://api.deepai.org/job-view-file/7d8e3522-c139-4d34-837e-e3b5840d4f6a/outputs/output.png' alt="" />
                </div>
                <div className='text-center md:text-left  px-3 '>
                    <h2 className='font-bold text-2xl mb-10 md:text-6xl'>What is <span className="text-black font-semibold border-b-2 ">
              <span className="text-red-500">CODE</span>ARAMBH
            </span>?</h2>
                    <p className=''>CodeArambh will gather brightest programmers, engineers, architects, designers,
                        and business visionaries. Our goal is to create a space where the brightest minds may
                        collaborate to develop the most creative solutions. The Hybrid Mode of CodeArambh
                        will pave the way for passionate youngsters who can't join us in the offline mode.</p><br />
                    <p>
                        CodeArambh aims to bring together the most brilliant programmers, engineers, architects,
                        designers, and business visionaries for another extraordinary event. Our primary objective is
                        to foster an environment where the sharpest minds collaborate to conceive the most innovative solutions.</p>
                </div>
            </div>
            {/* schedule */}
            <div className='p-10'>
                <h2 className='text-center text-5xl font-bold md:text-left mb-5'>Schedule</h2>
                <img src="https://www.hacknovate5.tech/newSchedule.PNG" alt="" className='hidden md:block' />
                <img src="https://www.hacknovate5.tech/schedulemobile.svg" alt="" className='md:hidden' />
            </div>

            {/*  */}
           

            

        </>
    )
}
