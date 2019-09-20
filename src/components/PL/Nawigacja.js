import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Menu, Flag, Container } from 'semantic-ui-react'


const Nawigacja = ({ changeLanguage }) => {
    const [activeItem, setActiveItem] = useState('portfolio')

    return(
        <Container>
            <Menu secondary size="large">
                <Menu.Menu position="left">
                    <Menu.Item 
                        link 
                        name='portfolio' 
                        active={activeItem === 'portfolio'} 
                        onClick={() => setActiveItem('portfolio')}
                        as={Link}
                        to='/'
                    >
                        Portfolio
                    </Menu.Item>
                    <Menu.Item 
                        link 
                        name='cvpl' 
                        active={activeItem === 'cvpl'}
                        onClick={() => setActiveItem('cvpl')}
                        as={Link}
                        to='/cv'
                    >
                        CV
                    </Menu.Item>
                    <Menu.Item 
                        link 
                        name='kontakt' 
                        active={activeItem === 'kontakt'} 
                        onClick={() => setActiveItem('kontakt')}
                        as={Link}
                        to='/kontakt'
                    >
                        Formularz Kontaktowy
                    </Menu.Item>
                </Menu.Menu>
                <Menu.Menu position="right">
                    <Menu.Item 
                        onClick={() => changeLanguage('pl')}
                        as={Link}
                        to='/'
                    >
                        <Flag name='pl' />
                    </Menu.Item>
                    <Menu.Item 
                        onClick={() => changeLanguage('en')}
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