import React from 'react'

import Navbar from './Navbar'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Technologies from './Technologies'
import Footer from '../Footer'

const PortfolioEN = ({ technologies}) => {
    return(
        <>
            <Navbar />
            <AboutMe />
            <hr />
            <Technologies technologies={technologies} />
            <hr />
            <Projects />
            <Footer />
        </>
    )
}

export default PortfolioEN