import React from 'react'
import { Item, Button, Icon, Header } from 'semantic-ui-react'

import logo from '../../assets/MOlogo.png'

const Projekty = () => {
    return (
        <>
            <Header as='h2' textAlign='center'>
                Recent projects
            </Header>
            <Item.Group divided>
                <Item>
                    <Item.Image src={logo} size='large' />
                    <Item.Content>
                        <Item.Header>Schroniska dla zwierząt</Item.Header>
                        <Item.Meta>Użyte technologie: JavaScript, React, Apollo, GraphQL, MongoDB, GoogleMaps API, JWT, SemanticUI</Item.Meta>
                        <Item.Description>
                            lorem ipsum
                            lorem ipsum
                        </Item.Description>
                        <Item.Extra>
                            <Button floated='left' color='green' style={{ marginTop: '15px', minWidth: '150px' }} as='a' href='https://www.linkedin.com/in/michalosinski91' target='blank'>
                                <Icon style={{ marginBottom: 8 }} size='large' name='globe' /> Otwórz aplikację
                            </Button>
                            <Button floated='center' color='black' style={{ marginTop: '15px', minWidth: '150px', fontSize: '14px' }} as='a' href='https://www.linkedin.com/in/michalosinski91' target='blank'>
                                <Icon style={{ marginBottom: 8 }} size='large' name='github square' inverted /> Zobacz kod aplikacji
                            </Button>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
        </>        
    )
}

export default Projekty