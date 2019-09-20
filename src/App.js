import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { Container } from 'semantic-ui-react';

import Nawigacja from './components/PL/Nawigacja'
import PortfolioPL from './components/PL/PortfolioPL'
import CVpl from './components/PL/CVpl'
import FormularzKontaktowy from './components/PL/FormularzKontaktowy'

import Navbar from './components/EN/Navbar'
import PortfolioEN from './components/EN/PortfolioEN'
import CVen from './components/EN/CVen'
import ContactForm from './components/EN/ContactForm'

import photo from './assets/photo.jpg'
import jslogo from './assets/javascript.svg'
import nodelogo from './assets/nodejs.svg'
import bootsraplogo from './assets/bootstrap.svg'
import graphqllogo from './assets/graphql.svg'
import mongodblogo from './assets/mongodb.png'
import reactlogo from './assets/react.svg'
import reduxlogo from './assets/redux.png'
import semanticuilogo from './assets/semanticui.png'
import webpacklogo from './assets/webpack.png'
import apollologo from './assets/apollo.png'
import csslogo from './assets/css.png'
import gitlogo from './assets/git.svg'



const App = () => {
  const [language, setLanguage] = useState('pl')

  const technologies = [
    {
      name: 'JavaScript',
      img: jslogo,
      id: 1
    },
    {
      name: 'NodeJS',
      img: nodelogo,
      id: 2
    },
    {
      name: 'React',
      img: reactlogo,
      id: 3
    },
    {
      name: 'Redux',
      img: reduxlogo,
      id: 4
    },
    {
      name: 'GraphQL',
      img: graphqllogo,
      id: 5
    },
    {
      name: 'Apollo',
      img: apollologo,
      id: 6
    },
    {
      name: 'MongoDB',
      img: mongodblogo,
      id: 7
    },
    {
      name: 'Webpack',
      img: webpacklogo,
      id: 8
    },
    {
      name: 'Semantic-UI',
      img: semanticuilogo,
      id: 9
    },
    {
      name: 'Bootstrap',
      img: bootsraplogo,
      id: 10
    },
    {
      name: 'Git',
      img: gitlogo,
      id: 11
    },
    {
      name: 'CSS',
      img: csslogo,
      id: 12
    }
  ]


  return(
    <Container>
      <Router>
        {language === 'pl' 
          ? <Nawigacja changeLanguage={setLanguage} />
          : <Navbar changeLanguage={setLanguage} />
        }
        <Route exact path='/' render={() => <PortfolioPL photo={photo} technologies={technologies} />} />
        <Route exact path='/cv' render={() => <CVpl />} />
        <Route exact path='/kontakt' render={() => <FormularzKontaktowy />} />
        <Route exact path='/en' render={() => <PortfolioEN photo={photo} technologies={technologies} />} />
        <Route exact path='/en/cv' render={() => <CVen />} />
        <Route exact path='/en/contact' render={() => <ContactForm />} />
      </Router>
    </Container>
  )
}

export default App;
