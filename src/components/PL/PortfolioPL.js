import React from 'react'
import OMnie from './OMnie'
import Projekty from './Projekty'
import Technologie from './Technologie'

const PortfolioPL = ({ photo, technologies}) => {
    return(
        <>
            <OMnie photo={photo} />
            <Projekty />
            <Technologie technologies={technologies} />
        </>
    )
}

export default PortfolioPL