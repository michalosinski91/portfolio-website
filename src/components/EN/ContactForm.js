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
    const [nameValid, setNameValid] = useState(false)
    const [emailValid, setEmailValid] = useState(false)

    const checkEmail = arg => {
        const re = /\S+@\S+\.\S+/
        setEmailValid(re.test(arg))
    }
    const checkName = arg => {
        const re = /^(\w+ ?)*$/i
        setNameValid(re.test(name))
    }

    const handleSubmit = event => {
        event.preventDefault()

        if (!nameValid) {
            setErrorMessage('The submitted name seems to contain forbidden character(s)')
            setTimeout(() => {
                setErrorMessage(null)
            }, 6000)
            return
        }
        if (!emailValid) {
            setErrorMessage('The submitted email seems to be use incorrect format - it should look like xxxxx@xxxx.xxx')
            setTimeout(() => {
                setErrorMessage(null)
            }, 6000)
            return
        }

        if (name.length < 3) {
            setErrorMessage('The submitted name seems to be too short - it should be at least 3 characters long')
            setTimeout(() => {
                setErrorMessage(null)
            }, 6000)
            return
        }
        if (email.length < 5) {
            setErrorMessage('The submitted email seems to be too short - it should be at least 5 characters long')
            setTimeout(() => {
                setErrorMessage(null)
            }, 6000)
            return
        }
        if (query.length < 5) {
            setErrorMessage('The submitted query seems to be too short - it should be at least 5 characters long')
            setTimeout(() => {
                setErrorMessage(null)
            }, 6000)
            return
        }

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
                    <Form.Input label='Name' required value={name} onChange={({ target }) => {
                        setName(target.value)
                        checkName(target.value)
                    }} />
                    <Form.Input label='Email' required value={email} onChange={({ target }) => {
                        setEmail(target.value)
                        checkEmail(target.value)
                    }} />
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