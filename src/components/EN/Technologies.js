import React from 'react'
import { Container, Card, Header, Image } from 'semantic-ui-react'

const Technologies = ({ technologies }) => {
    return(
        <Container style={{ margin: '30px'}}>
            <Header style={{ fontSize: '28px'}} textAlign='center'>
                Technologies I am currently using
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

export default Technologies