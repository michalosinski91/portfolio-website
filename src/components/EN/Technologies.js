import React from 'react'
import { Container, Card, Header, Image } from 'semantic-ui-react'

const Technologies = ({ technologies }) => {
    return(
        <Container>
            <Header as='h2' textAlign='center'>
                Technologies I work with
            </Header>
            <Card.Group centered stackable style={{ marginTop: '30px' }}>
                {technologies.map(tech => 
                    <Card key={tech.id} style={{ width: '200px'}}>
                        <Card.Content >  
                            <Image src={tech.img} size='small' style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto'}} />
                            <Card.Header textAlign='center' style={{ marginTop: '10px'}}>{tech.name}</Card.Header>
                        </Card.Content>
                    </Card>
                )}
            </Card.Group>
        </Container>
    )
}

export default Technologies