import React from 'react'
import { Container, Grid, Icon, Header, Button, Modal } from 'semantic-ui-react'

import ContactForm from './ContactForm'
import CVen from './CVen'

const AboutMe = () => {
    return(
        <Container style={{ marginBottom: '30px'}}>
            <Header as='h1' textAlign='center' style={{ marginTop: '50px', fontSize: '44px' }}>Hi, I'm <strong style={{ color: '#d42d17'}}>Michal Osinski</strong></Header>
            <Header as='h3' textAlign='center' style={{ marginTop: '10px', fontSize: '30px' }}>Web Developer</Header>
            <Container textAlign='center' style={{ marginTop: '50px'}}>
                <p style={{ fontSize: '18px'}}>Are you looking to hire a web developer for your team? <strong>You're in the right place!</strong> Please use the links below to get in touch.</p>  
            </Container>
            <Grid centered style={{ margin: '35px'}}>                        
                <Button color='google plus' style={{ marginTop: '15px', minWidth: '275px' }} as='a' href='https://www.linkedin.com/in/michalosinski91' target='blank'>
                    <Icon name='linkedin' /> michalosinski91
                </Button>
                <Button color='google plus' style={{ marginTop: '15px', minWidth: '275px' }} as='a' href='mailto:hello@michalosinski.dev'>
                    <Icon name='mail' /> hello@michalosinski.dev
                </Button>
                <Modal trigger={
                    <Button color='google plus' style={{ marginTop: '15px', minWidth: '275px' }}>
                        <Icon name='inbox' /> Contact Form
                    </Button>} closeIcon
                >
                    <Modal.Content>
                        <ContactForm />
                    </Modal.Content>
                </Modal>
            </Grid>            
        </Container>
    )
}

export default AboutMe