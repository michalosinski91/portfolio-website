import React from 'react'

import Navbar from './Navbar'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Technologies from './Technologies'

const PortfolioPL = ({ technologies}) => {
    return(
        <>
            <Navbar />
            <AboutMe />
            <hr />
            <Projects />
            <hr />
            <Technologies technologies={technologies} />
        </>
    )
}

export default PortfolioPL