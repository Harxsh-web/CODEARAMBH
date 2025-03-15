import React from 'react'
import { HomeSection } from './HomeSection'
import { About } from '../about/About'
import { Footer } from '../footer/Footer'
import { Technology } from '../theme/Technology'
import { Nav } from '../navbar/Nav'

export const HomePage = () => {
    return (
        <>
        
        <HomeSection/>
        <About/>
        <Technology/>
        
        </>
    )
}
