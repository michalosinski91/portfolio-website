import React from 'react'
import { Container, Header, Card, Image } from 'semantic-ui-react'

const Technologie = ({ technologies }) => {
    return(
        <Container style={{ margin: '30px'}}>
            <Header as='h2' textAlign='center'>
                Technologie które obecnie używam
            </Header>
            <Card.Group centered stackable style={{ marginTop: '30px' }}>
                {technologies.map(tech => 
                    <Card key={tech.id} style={{ width: '200px'}}>
                        <Card.Content >  
                            <Image src={tech.img} size='tiny' style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto'}} />
                            <Card.Header textAlign='center' style={{ marginTop: '10px'}}>{tech.name}</Card.Header>
                        </Card.Content>
                    </Card>
                )}
            </Card.Group>
        </Container>
    )
}

export default Technologie