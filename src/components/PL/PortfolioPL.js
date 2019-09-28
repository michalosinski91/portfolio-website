import React from 'react'

import Nawigacja from './Nawigacja'
import OMnie from './OMnie'
import Projekty from './Projekty'
import Technologie from './Technologie'

const PortfolioPL = ({ technologies }) => {
    return(
        <>
            <Nawigacja />
            <OMnie />
            <hr />
            <Projekty />
            <hr />
            <Technologie technologies={technologies} />
        </>
    )
}

export default PortfolioPL