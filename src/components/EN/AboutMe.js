import React from 'react'
import { Item, Icon, Header, Button } from 'semantic-ui-react'

const AboutMe = ({ photo }) => {
    return(
        <Item.Group relaxed>
            <Header as='h1' textAlign='center' style={{ marginTop: '50px' }}>Michal Osinski</Header>
            <Item>
                <Item.Image size='medium' src={photo} />
                <Item.Content>
                    <Item.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis tincidunt nibh, quis laoreet lorem pulvinar a. Fusce ut massa scelerisque, aliquam metus a, pretium elit. Suspendisse sit amet dui a lorem tempus luctus. Nam fermentum sapien eu enim mattis, a tristique arcu sagittis. Nunc mattis nulla quis tortor ullamcorper consectetur. In hac habitasse platea dictumst. Proin imperdiet aliquet tortor, non sagittis eros aliquet et. Curabitur ac pulvinar nisl, ut lobortis sem. Donec varius odio eros. Suspendisse sit amet fermentum lorem, in hendrerit tellus. Vivamus efficitur ligula eu elit rhoncus luctus. Vivamus commodo massa vel suscipit malesuada. Suspendisse faucibus lacinia ligula id elementum. Nam sed ornare lacus. Morbi feugiat tempus magna vel gravida.</Item.Description>
                    <Item.Extra style={{ marginTop: '25px' }} >
                        <Button color='green' as='a' href='https://github.com/michalosinski91' target='blank'>
                            <Icon name='github'  /> michalosinski91
                        </Button>
                        <Button color='green' as='a' href='https://www.linkedin.com/in/michalosinski91' target='blank'>
                            <Icon name='linkedin' /> michalosinski91
                        </Button>
                        <Button color='green' as='a' href='mailto:hello@michalosinski.dev'>
                            <Icon name='mail' /> hello@michalosinski.dev
                        </Button>
                        <Button color='blue' as='a' href='https://www.google.co.uk/maps/@50.0468548,19.9348337,12z' target='blank'>
                            <Icon name='map marker alternate' /> Cracow, Poland
                        </Button>
                    </Item.Extra>
                </Item.Content>
            </Item>
        </Item.Group>
    )
}

export default AboutMe