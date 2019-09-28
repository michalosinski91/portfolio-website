import React, { useState } from 'react'
import { Grid, Form, Header } from 'semantic-ui-react'

const FormularzKontaktowy = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [query, setQuery] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        setName('')
        setEmail('')
        setTelephone('')
        setQuery('')
    }

    return(
        <Grid textAlign='center' style={{ margin: '25px' }}>
            <Grid.Column style={{ maxWidth: '600px' }}>
                <Header as='h2' textAlign='center'>
                    Proszę wypełnic formularz
                </Header>
                <Form size='large' onSubmit={handleSubmit} style={{ marginTop: '50px'}}>
                    <Form.Input label='Imię' required value={name} onChange={({ target }) => setName(target.value)} />
                    <Form.Input label='Email' required value={email} onChange={({ target }) => setEmail(target.value)}/>
                    <Form.Input label='Telefon' required value={telephone} onChange={({ target }) => setTelephone(target.value)} />
                    <Form.TextArea required label='Treść' value={query} onChange={({ target }) => setQuery(target.value)} />
                    <Form.Button size='large' color='green' fluid type='submit'>Wyślij</Form.Button>
                </Form>
            </Grid.Column>
        </Grid>
    )
}

export default FormularzKontaktowy