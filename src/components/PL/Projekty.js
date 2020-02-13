import React from 'react'
import { Item, Button, Icon, Header, Image, Modal } from 'semantic-ui-react'

import shelterImage from '../../assets/project1.JPG'
import exchangeImage from '../../assets/przelicznik.JPG'
import kanbanImage from '../../assets/kanban.JPG'

const Projekty = () => {
    return (
        <>
            <Header style={{ fontSize: '28px', margin: '30px 0' }}  textAlign='center'>
                Przykładowe projekty:
            </Header>
            <Item.Group divided>
                <Item>
                    <Modal trigger={<Item.Image src={shelterImage} size='large' />} basic closeIcon>
                        <Image src={shelterImage} size='massive' />
                    </Modal>
                    <Item.Content>
                        <Item.Header>Znajdź Schronisko - Portal schronisk dla zwierząt</Item.Header>
                        <Item.Meta>Użyte technologie: JavaScript, React, Apollo, GraphQL, MongoDB, Mongoose, GoogleMaps API, JWT, SemanticUI</Item.Meta>
                        <Item.Description style={{ marginTop: '15px'}}>
                            W tej aplikacji użytkownik może zobaczyć mapę Polski z zaznaczonm położeniem prawie 100 prawdziwych schronisk dla zwierząt.
                            Użytkownim może wybrać każde ze schronisk poprzez mapę lub z listy, by zobaczyć szczegóły wybranej placówki.
                            Znajdują się tam prawdziwe dane kontaktowe schroniska (adres pocztowy, number kontaktowy, link do strony internetowej) i lista zwierząt obecnie znajdujących się w tej placówce.
                            Użytkownik może wybrać zwierzę z listy by wyświetlić szczegółowe dane wybranego zwierzęcia.
                            Jest także możliwość wysłania wiadomości do schroniska.
                            Użytkownik może zarejestrować konto na portalu dla użytku własnego lub w roli administratora dla jednego ze schronisk.
                            Jeżeli do użytkownika przypisana jest rola administratora, może on zmieniać szczegóły kontaktowe placówki (albo usunąć ją całkowicie), 
                            a także uaktualniać bazę danych zwierząt - zwierzęta mogą być dodane i usunięte, lub szczegóły istniejących zwierząt mogą być zmienione.
                            Zalogowani użytkownicy mają też dostęp do skrzynki pocztowej, gdzie mogą wyświetlić i odpowiedzieć na wiadomości.
                        </Item.Description>
                        <Item.Description style={{ marginTop: '15px'}}>
                            Ta aplikacja została napisana w języku JavaScript (ES6), z użyciem React (z Hookami) i Apollo na frontendzie, a do stworzenia interfejsu użytkownika wykorzystałem bibliotekę SemanticUI.
                            Mapa na stronie głównej wykorzystuje API GoogleMaps.
                            Serwer jest napisany w środowisku Node.js i wykorzystuje ApolloServer. API napisane jest w standardzie GraphQL i łączy się z bazą danych MongoDB Atlas (chmura) przy użyciu biblioteki Mongoose. 
                            Autoryzacja wykorzystuje standard JSON Web Tokens (JWT).
                            Dane schronisk (nazwa, lokalizacja, strona internetowa, number kontaktowy) zostały zebrane poprzez web-scraping z biblioteką Puppeteer.js. 
                            Zdjęcia przechowywane są na serwisie Cloudinary.
                        </Item.Description>
                        <Item.Description style={{ marginTop: '15px'}}>
                            Praca nad tą aplikacją nie jest jeszcze skończona i w najbliższym czasie planuję dodać, na przykład, 
                            wtyczkę z wiadomościami z portali społecznościowch (np. Twitter) dla poszczególnych schronisk jeśli schronisko posiada aktywne konta w wybranym portalu,
                            możliwość przekazania darowizny dla poszczególnych placówek, a także ulepszyć metodę autoryzacji JWT w aplikacji.
                        </Item.Description>
                        <Item.Extra>
                            <Button floated='right' color='green' style={{ marginTop: '15px', minWidth: '150px' }} as='a' href='https://znajdz-schronisko.herokuapp.com/' target='blank'>
                                <Icon style={{ marginBottom: 8 }} size='large' name='globe' /> Otwórz aplikację
                            </Button>
                            <Button floated='right' color='black' style={{ marginTop: '15px', minWidth: '150px', fontSize: '14px' }} as='a' href='https://github.com/michalosinski91/pet-adoption-client' target='blank'>
                                <Icon style={{ marginBottom: 8 }} size='large' name='github square' inverted /> Zobacz kod aplikacji
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
                        <Item.Meta>Użyte technologie: JavaScript, React, Redux, CSS</Item.Meta>
                        <Item.Description style={{ marginTop: '15px'}}>
                            Aplikacja loguje transakcje w Euro i automatycznie przelicza na Złote.
                            Lista transajcki wyświetla nazwy wszystkich transakckcji w Euro i Złotych. Transakcje można także usuwać z listy.
                            Łączna wartość wszystkich transakcji i szczegóły największej z transakcji są wświetlone osobno.
                            Użytkownik może zmieniać kurs wymiany EUR-PLN. Zmiana kursu automatycznie uaktualnia wartości PLN wszystkich transakcji.
                        </Item.Description>
                        <Item.Extra>
                            <Button floated='right' color='green' style={{ marginTop: '15px', minWidth: '150px' }} as='a' href='https://https://przelicznik-walut.herokuapp.com/' target='blank'>
                                <Icon style={{ marginBottom: 8 }} size='large' name='globe' /> Otwórz aplikację
                            </Button>
                            <Button floated='right' color='black' style={{ marginTop: '15px', minWidth: '150px', fontSize: '14px' }} as='a' href='https://https://github.com/michalosinski91/przelicznik-walut' target='blank'>
                                <Icon style={{ marginBottom: 8 }} size='large' name='github square' inverted /> Zobacz kod aplikacji
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
                        <Item.Meta>Użyte technologie: TypeScript, Angular, AngularMaterial, Firebase, Google SignIn</Item.Meta>
                        <Item.Description style={{ marginTop: '15px'}}>
                            Użytkownik może stworzyć konto lub zalogować się używając adresu emailowego lub przy użyciu konta Google.
                            Użytkownik możę stworzyć nowe projekty i zadania wewnątrz tych projektów, a także modyfikować i usuwać istniejące już wpisy.
                            Kolejność projektów i zadań możę być zmieniana poprzez przeciąganie elementów ('drag-and-drop').
                        </Item.Description>
                        <Item.Extra>
                            <Button floated='right' color='green' style={{ marginTop: '15px', minWidth: '150px' }} as='a' href='https://kanban-ang.firebaseapp.com/' target='blank'>
                                <Icon style={{ marginBottom: 8 }} size='large' name='globe' /> Otwórz aplikację
                            </Button>
                            <Button floated='right' color='black' style={{ marginTop: '15px', minWidth: '150px', fontSize: '14px' }} as='a' href='https://github.com/michalosinski91/kanban' target='blank'>
                                <Icon style={{ marginBottom: 8 }} size='large' name='github square' inverted /> Zobacz kod aplikacji
                            </Button>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
        </>        
    )
}

export default Projekty