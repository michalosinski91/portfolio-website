import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, Flag, Container } from 'semantic-ui-react'


const Nawigacja = () => {

    return(
        <Container>
            <Menu secondary size="large">
                <Menu.Menu position="left">
                    <Menu.Item>
                        LOGO
                    </Menu.Item>
                </Menu.Menu>
                <Menu.Menu position="right">
                    <Menu.Item 
                        as={Link}
                        to='/'
                    >
                        <Flag name='pl' />
                    </Menu.Item>
                    <Menu.Item 
                        as={Link}
                        to='/en'
                    >
                        <Flag name='gb' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </Container>
    )
}

export default Nawigacja