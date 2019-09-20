import React from 'react'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Technologies from './Technologies'

const PortfolioPL = ({ photo, technologies}) => {
    return(
        <>
            <AboutMe photo={photo} />
            <Projects />
            <Technologies technologies={technologies} />
        </>
    )
}

export default PortfolioPL