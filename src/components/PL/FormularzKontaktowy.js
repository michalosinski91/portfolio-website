import React, { useState } from 'react'
import { Grid, Form, Header, Message } from 'semantic-ui-react'
import contactFormService from '../../services/contactEntry'

const FormularzKontaktowy = () => {
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
                setSuccessMessage(`ID wiadomości: ${returnedObject._id}`)
            })
            .catch(error => {
                console.log(error)
                setErrorMessage('Wystąpił błąd, proszę spróbować ponownie, lub wyśłać wiadomość na hello@michalosinski.dev')
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
                    Proszę wypełnic formularz kontaktowy
                </Header>
                <Form size='large' onSubmit={handleSubmit} style={{ marginTop: '50px'}}>
                    <Form.Input label='Imię' required value={name} onChange={({ target }) => setName(target.value)} />
                    <Form.Input label='Email' required value={email} onChange={({ target }) => setEmail(target.value)}/>
                    <Form.Input label='Telefon' value={telephone} onChange={({ target }) => setTelephone(target.value)} />
                    <Form.TextArea required label='Treść' value={query} onChange={({ target }) => setQuery(target.value)} />
                    <Form.Button size='large' color='green' fluid type='submit'>Wyślij</Form.Button>
                </Form>
                {successMessage && (
                    <Message
                        success
                        header='Dziękuję za wiadomość! Odpowiem na nią w najbliższym czasie.'
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

export default FormularzKontaktowy