import React from 'react'
import {Container} from 'semantic-ui-react'

const Footer = () => {
    return(
        <Container textAlign='center' style={{ backgroundColor: '#d42d17', height: '40px'}}>
            <div style={{ paddingTop: 10}}>
                <p style={{ color: 'white' }}>&copy; Michal Osinski</p>
            </div>
        </Container>
    )
}

export default Footer