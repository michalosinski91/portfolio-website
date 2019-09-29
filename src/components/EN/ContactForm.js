import React, { useState } from 'react'
import { Grid, Form, Header, Message } from 'semantic-ui-react'
import contactFormService from '../../services/contactEntry'

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [query, setQuery] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        const formEntry = {
            name,
            email,
            telephone,
            message: query
        }

        contactFormService
            .create(formEntry)
            .then(returnedObject => {
                setSuccessMessage(`Message ID: ${returnedObject._id}`)
            })
            .catch(error => {
                console.log(error)
                setErrorMessage('An error has occured - please try again, or email hello@michalosinski.dev with your enquiry')
                setTimeout(() => {
                    setErrorMessage('')
                }, 5000)
            })
            


        setName('')
        setEmail('')
        setTelephone('')
        setQuery('')
    }

    return(
        <Grid textAlign='center' style={{ margin: '25px' }}>
            <Grid.Column style={{ maxWidth: '650px' }}>
                <Header as='h2' textAlign='center'>
                    Use the form for any of your enquiries
                </Header>
                <Form size='large' onSubmit={handleSubmit} style={{ marginTop: '50px'}}>
                    <Form.Input label='Name' required value={name} onChange={({ target }) => setName(target.value)} />
                    <Form.Input label='Email' required value={email} onChange={({ target }) => setEmail(target.value)} />
                    <Form.Input label='Telephone' value={telephone} onChange={({ target }) => setTelephone(target.value)} />
                    <Form.TextArea required label='Query' value={query} onChange={({ target }) => setQuery(target.value)} />
                    <Form.Button size='large' color='green' fluid type='submit'>Submit</Form.Button>
                </Form>
                {successMessage && (
                    <Message
                        success
                        header='Thank you for submitting the message! I will get back to you as soon as I can.'
                        content={successMessage}   
                    />
                )}
                {errorMessage && (
                    <Message 
                        negative
                        header={errorMessage}
                    />
                )}
            </Grid.Column>
        </Grid>
    )
}

export default ContactForm