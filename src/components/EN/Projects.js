import React from 'react'
import { Item, Button, Icon, Header } from 'semantic-ui-react'

import logo from '../../assets/MOlogo.png'

const Projects = () => {
    return (
        <>
            <Header as='h2' textAlign='center'>
                Recent projects
            </Header>
            <Item.Group divided>
                <Item>
                    <Item.Image src={logo} size='large' />
                    <Item.Content>
                        <Item.Header>Animal Shelter web app</Item.Header>
                        <Item.Meta>Environment: JavaScript, React, Apollo, GraphQL, MongoDB, Mongoose, GoogleMaps API, JWT, SemanticUI</Item.Meta>
                        <Item.Description style={{ marginTop: '15px'}}>
                            This application allows the user to view a map of Poland with pinponted location of nearly 100 real animal shelters. 
                            The user can select a shelter, either from the map or a list, to view that shelter's detailed page.
                            The shelter's information include real contact details (address, phone number, website) and a list of animals currently at the shelter (mock data).
                            The user can select an animal to view more details about that animal.
                            There is also a message-box, which allows the user to send an enquiry to that shelter.
                            The user can create an account on the website, either as an individual user or as an admin for a shelter.
                            If assiged to a shelter, the admin can then alter the details of the shelter (or delete it entirely), and can amend the details of the animals at that shelter,
                            including adding and removing animals from the database, or altering their details.
                            Registered users also have access to an inbox, which allows them to view and respond to messages received.
                        </Item.Description>
                        <Item.Description style={{ marginTop: '15px'}}>
                            The application was built using JavaScript (ES6), React (including Hooks) and Apollo on the frontend, with SemanticUI for styling. The map interface is created using GoogleMaps API.
                            The server runs in Node.js environment, utilises ApolloServer. GraphQL is used to build the API, MongoDB Atlas used for cloud database, with Mongoose package used to create schemas.
                            Authentication/Authorization is using JSON Web Tokens (JWT). The data of the shelters (name, location, website, contact number) was web-scraped using Puppeteer.js. Images are uploaded and hosted using Cloudinary service.
                        </Item.Description>
                        <Item.Description style={{ marginTop: '15px'}}>
                            I am currently working on this application, and the planned changes/additions for the near future include 
                            social media feed (e.g. Twitter) for individual shelters if that particular shelter has an active a social media account on the selected platform, making a donation to a shelter, 
                            and improvement to the authorization/authentication flow (similar to the one I have implemented in the 'JWT Node' repo described below).
                        </Item.Description>
                        <Item.Extra>
                            <Button floated='right' color='green' style={{ marginTop: '15px', minWidth: '150px' }} as='a' href='https://www.linkedin.com/in/michalosinski91' target='blank'>
                                <Icon style={{ marginBottom: 8 }} size='large' name='globe' /> Open the app (Polish language only)
                            </Button>
                            <Button floated='right' color='black' style={{ marginTop: '15px', minWidth: '150px', fontSize: '14px' }} as='a' href='https://www.linkedin.com/in/michalosinski91' target='blank'>
                                <Icon style={{ marginBottom: 8 }} size='large' name='github square' inverted /> See the code
                            </Button>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
        </>        
    )
}

export default Projects