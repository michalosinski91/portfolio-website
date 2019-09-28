import React from 'react'
import { Container, Grid, Icon, Header, Button, Modal } from 'semantic-ui-react'

import ContactForm from './ContactForm'
import CVen from './CVen'

const AboutMe = () => {
    return(
        <Container style={{ marginBottom: '30px'}}>
            <Header as='h1' textAlign='center' style={{ marginTop: '50px' }}>Michal Osinski</Header>
            <Header as='h3' textAlign='center' style={{ marginTop: '30px' }}>Web Developer</Header>
            <Grid centered style={{ margin: '45px'}}>                        
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
                <Modal size='fullscreen' trigger={
                    <Button color='google plus' style={{ marginTop: '15px', minWidth: '275px' }}>
                        <Icon name='address card' /> Resume (view)
                    </Button>} closeIcon
                >
                    <Modal.Content>
                        <CVen />
                    </Modal.Content>
                </Modal>
                <Button color='google plus' style={{ marginTop: '15px', minWidth: '275px' }}>
                    <Icon name='download' /> Resume (download PDF)
                </Button>
            </Grid>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis tincidunt nibh, quis laoreet lorem pulvinar a. Fusce ut massa scelerisque, aliquam metus a, pretium elit. Suspendisse sit amet dui a lorem tempus luctus. Nam fermentum sapien eu enim mattis, a tristique arcu sagittis. Nunc mattis nulla quis tortor ullamcorper consectetur. In hac habitasse platea dictumst. Proin imperdiet aliquet tortor, non sagittis eros aliquet et. Curabitur ac pulvinar nisl, ut lobortis sem. Donec varius odio eros. Suspendisse sit amet fermentum lorem, in hendrerit tellus. Vivamus efficitur ligula eu elit rhoncus luctus. Vivamus commodo massa vel suscipit malesuada. Suspendisse faucibus lacinia ligula id elementum. Nam sed ornare lacus. Morbi feugiat tempus magna vel gravida.</p>
        </Container>
    )
}

export default AboutMe