import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Container } from 'semantic-ui-react';

import PortfolioPL from './components/PL/PortfolioPL'
import PortfolioEN from './components/EN/PortfolioEN'

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
import gitlogo from './assets/git.png'
import typescriptlogo from './assets/typescript.png'
import expresslogo from './assets/express.svg'
import htmllogo from './assets/html.svg'
import angularlogo from './assets/angular.png'
import sasslogo from './assets/sass.png'


const App = () => {

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
    },
    {
      name: 'TypeScript',
      img: typescriptlogo,
      id: 13
    },
    {
      name: 'Express',
      img: expresslogo,
      id: 14
    },
    {
      name: 'HTML5',
      img: htmllogo,
      id: 15
    },
    {
      name: 'Angular',
      img: angularlogo,
      id: 16
    },
    {
      name: 'SASS',
      img: sasslogo,
      id: 17
    }
  ]

  const NoMatch = ({ location }) => {
    return (
      <div>
          <p>Path {location.pathname} does not exist. Go to <a href='http://michalosinski.dev'>homepage</a></p>
          <p>Ścieżka {location.pathname} nie istnieje. Przejdź do Go to <a href='http://michalosinski.dev'>strony głównej</a></p>
      </div>
    )
  }

  return(
      <Container>
        <Router>
          <Switch>
            <Route exact path='/' render={() => <PortfolioPL technologies={technologies} />} />
            <Route exact path='/en' render={() => <PortfolioEN technologies={technologies} />} />
            <Route path='*' render={() => <NoMatch />} />
          </Switch>
        </Router>
      </Container>
  )
}

export default App;
