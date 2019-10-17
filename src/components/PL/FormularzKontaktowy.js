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
            setErrorMessage('Podane imię zawiera niedozwolone znaki')
            setTimeout(() => {
                setErrorMessage(null)
            }, 6000)
            return
        }
        if (!emailValid) {
            setErrorMessage('Podany email jest niepoprawny - powinien być w formacie - xxxxx@xxxx.xxx')
            setTimeout(() => {
                setErrorMessage(null)
            }, 6000)
            return
        }

        if (name.length < 3) {
            setErrorMessage('Podane imię jest za krótkie - powinno zawierać co najmniej 3 litery')
            setTimeout(() => {
                setErrorMessage(null)
            }, 6000)
            return
        }
        if (email.length < 5) {
            setErrorMessage('Podany email jest za krótki - powinien zawierać co najmniej 5 znaków')
            setTimeout(() => {
                setErrorMessage(null)
            }, 6000)
            return
        }
        if (query.length < 5) {
            setErrorMessage('Podany tekst zapytania jest za krótki - powinien zawierać co najmniej 5 znaków')
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
                    <Form.Input label='Imię' required value={name} onChange={({ target }) => {
                        setName(target.value)
                        checkName(target.value)
                    }} />
                    <Form.Input label='Email' required value={email} onChange={({ target }) => {
                        setEmail(target.value)
                        checkEmail(target.value)
                    }}/>
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