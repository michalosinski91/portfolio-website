import React from 'react'
import { Item, Button, Icon, Header, Image, Modal } from 'semantic-ui-react'

import shelterImage from '../../assets/project1.JPG'
import exchangeImage from '../../assets/przelicznik.JPG'
import kanbanImage from '../../assets/kanban.JPG'

const Projects = () => {
    return (
        <>
            <Header style={{ fontSize: '28px', margin: '30px 0' }} textAlign='center'>
                Examples of what I have built:
            </Header>
            <Item.Group divided>
                <Item>
                    <Modal trigger={<Item.Image src={shelterImage} size='large' />} basic closeIcon>
                        <Image src={shelterImage} size='massive' />
                    </Modal>
                    <Item.Content>
                        <Item.Header>Znajdź Schronisko - Animal Shelter web app</Item.Header>
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
                            and improvement to the JWT authorization/authentication flow.
                        </Item.Description>
                        <Item.Extra>
                            <Button floated='right' color='green' style={{ marginTop: '15px', minWidth: '150px' }} as='a' href='https://znajdz-schronisko.herokuapp.com/' target='blank'>
                                <Icon style={{ marginBottom: 8 }} size='large' name='globe' /> Open the app (Polish language only)
                            </Button>
                            <Button floated='right' color='black' style={{ marginTop: '15px', minWidth: '150px', fontSize: '14px' }} as='a' href='https://github.com/michalosinski91/pet-adoption-client' target='blank'>
                                <Icon style={{ marginBottom: 8 }} size='large' name='github square' inverted /> See the code
                            </Button>
                        </Item.Extra>
                    </Item.Content>
                </Item>
                <Item>
                    <Modal trigger={<Item.Image src={exchangeImage} size='large' />} basic closeIcon>
                        <Image src={exchangeImage} size='massive' />
                    </Modal>
                    <Item.Content>
                        <Item.Header>Przelicznik Walut</Item.Header>
                        <Item.Meta>Environment: JavaScript, React, Redux, CSS</Item.Meta>
                        <Item.Description style={{ marginTop: '15px'}}>
                            An Euro transaction log with automatic EUR-PLN currency exchange.
                            The user can add transactions in Euro, which are then displayed in a list with the amount in Euro and Zloty.
                            The sum of all transactions and details of the largest transaction are also displayed.
                            The user can alter the exchange rate, which then automatically adjusts all transactions.
                        </Item.Description>
                        <Item.Extra>
                            <Button floated='right' color='green' style={{ marginTop: '15px', minWidth: '150px' }} as='a' href='https://https://przelicznik-walut.herokuapp.com/' target='blank'>
                                <Icon style={{ marginBottom: 8 }} size='large' name='globe' /> Open the app (Polish language only)
                            </Button>
                            <Button floated='right' color='black' style={{ marginTop: '15px', minWidth: '150px', fontSize: '14px' }} as='a' href='https://https://github.com/michalosinski91/przelicznik-walut' target='blank'>
                                <Icon style={{ marginBottom: 8 }} size='large' name='github square' inverted /> See the code
                            </Button>
                        </Item.Extra>
                    </Item.Content>
                </Item>
                <Item>
                    <Modal trigger={<Item.Image src={kanbanImage} size='large' />} basic closeIcon>
                        <Image src={kanbanImage} size='massive' />
                    </Modal>
                    <Item.Content>
                        <Item.Header>MyKanban</Item.Header>
                        <Item.Meta>Environment: TypeScript, Angular, AngularMaterial, Firebase, Google SignIn</Item.Meta>
                        <Item.Description style={{ marginTop: '15px'}}>
                            In this application, the user can create an account with email or log in using a Google account.
                            The user can create new boards and tasks within them, and modify and delete the existing boards and tasks.
                            The boards and tasks can be re-arranged with a drag-and-drop functionality.
                        </Item.Description>
                        <Item.Extra>
                            <Button floated='right' color='green' style={{ marginTop: '15px', minWidth: '150px' }} as='a' href='https://kanban-ang.firebaseapp.com/' target='blank'>
                                <Icon style={{ marginBottom: 8 }} size='large' name='globe' /> Open the app
                            </Button>
                            <Button floated='right' color='black' style={{ marginTop: '15px', minWidth: '150px', fontSize: '14px' }} as='a' href='https://github.com/michalosinski91/kanban' target='blank'>
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