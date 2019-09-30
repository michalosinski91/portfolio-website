import React from 'react'

import Nawigacja from './Nawigacja'
import OMnie from './OMnie'
import Projekty from './Projekty'
import Technologie from './Technologie'
import Footer from '../Footer'

const PortfolioPL = ({ technologies }) => {
    return(
        <>
            <Nawigacja />
            <OMnie />
            <hr />
            <Technologie technologies={technologies} />
            <hr />
            <Projekty />
            <Footer />
        </>
    )
}

export default PortfolioPL