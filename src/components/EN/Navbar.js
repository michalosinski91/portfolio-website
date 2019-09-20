import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Menu, Flag, Container } from 'semantic-ui-react'


const Navbar = ({ changeLanguage }) => {
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
                        to='/en'
                    >
                        Portfolio
                    </Menu.Item>
                    <Menu.Item 
                        link
                        name='cven' 
                        active={activeItem === 'cven'} 
                        onClick={() => setActiveItem('cven')}
                        as={Link}
                        to='/en/cv'
                    >
                        CV
                    </Menu.Item>
                    <Menu.Item 
                        link
                        name='contact' 
                        active={activeItem === 'contact'} 
                        onClick={() => setActiveItem('contact')}
                        as={Link}
                        to='/en/contact'
                    >
                        Contact Form
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

export default Navbar