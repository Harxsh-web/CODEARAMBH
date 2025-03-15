import React from 'react'
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { RegistrationForm } from './RegistrationForm';

export const RegistrationPage = () => {
    return (
        <div className='mt-40'>
            <h2 className='text-center font-mono '>
            <TypingAnimation>Register Here !  !</TypingAnimation>
            </h2>
            <RegistrationForm/>
            {/* <Toaster /> */}
        </div>
    )
}
