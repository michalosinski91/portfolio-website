import React from 'react'
import { Container, Grid, Icon, Header, Button, Modal } from 'semantic-ui-react'


import FormularzKontaktowy from './FormularzKontaktowy'
import CVpl from './CVpl'

const OMnie = () => {
    return(
        <Container style={{ marginBottom: '30px'}}>
            <Header as='h1' textAlign='center' style={{ marginTop: '50px', fontSize: '44px' }}>Witam, jestem <strong style={{ color: '#d42d17'}}>Michał Osiński</strong></Header>
            <Header as='h3' textAlign='center' style={{ marginTop: '10px', fontSize: '30px' }}>Programista Web Full-Stack</Header>
            <Container textAlign='center' style={{ marginTop: '50px'}}>
                <p style={{ fontSize: '18px'}}>Potrzebujesz programisty web dla swojej firmy? <strong>Jesteś w dobrym miejscu!</strong> Skontaktuj się używając poniższych linków.</p>  
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
                        <Icon name='inbox' /> Formularz Kontaktowy
                    </Button>} closeIcon
                >
                    <Modal.Content>
                        <FormularzKontaktowy />
                    </Modal.Content>
                </Modal>
                <Modal size='fullscreen' trigger={
                    <Button color='google plus' style={{ marginTop: '15px', minWidth: '275px' }}>
                        <Icon name='address card' /> CV (otwórz)
                    </Button>} closeIcon
                >
                    <Modal.Content>
                        <CVpl />
                    </Modal.Content>
                </Modal>
                <Button color='google plus' style={{ marginTop: '15px', minWidth: '275px' }}>
                    <Icon name='download' /> CV (pobierz PDF)
                </Button>
            </Grid>
        </Container>
    )
}

export default OMnie