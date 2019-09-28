import React from 'react'
import '../../styles/CVstyle.css'


const CVpl = () => {
    return(
        <div className='container'>
            <div className='container-flex'>
                <aside>
                    <div className='aside-heading'>
                        <h2>MICHAŁ OSIŃSKI</h2>
                        <h4>Web Developer</h4>
                    </div>
                    <div className='aside-contact'>
                        <div className='aside-contact-links'>
                            <p><a className='link-white' href='mailto:hello@michalosinski.dev'><span className='icon emailIcon'></span>michal@michalosinski.dev</a></p>
                            <p><a className='link-white' href='http://www.michalosinski.dev' target='blank'><span className='icon webIcon'></span>michalosinski.dev</a></p>
                            <p><a className='link-white' href='https://www.linkedin.com/in/michalosinski91' target='blank'><span className='icon linkedInIcon'></span>/in/michalosinski91</a></p>
                            <p><a className='link-white' href='https://github.com/michalosinski91' target='blank'><span className='icon githubIcon'></span>/michalosinski91</a></p>
                        </div>
                    </div>
                    <div className='aside-language'>
                        <h4><span className='icon languageIcon'></span>Języki</h4>
                        <div className='aside-language-languages'>
                            <p><strong>Polski</strong> - ojczysty</p>
                            <p><strong>Angielski</strong> - biegły</p>
                        </div>
                    </div>
                </aside>
                <main>
                    <article>
                        <h3>
                            <span className='icon profileIcon'></span>Profil
                        </h3>
                        <p>A driven and reliable full-stack web developer, interested 
                            in building services using modern JavaScript. Passionate 
                            about learning new skills and technologies. Szukam możliwości 
                        </p>
                    </article>
                    <article>
                        <h3>
                            <span className='icon skillsIcon'></span>Umiejętności
                        </h3>
                        <p>
                            <strong>Języki scriptowe i technologie web:</strong> JavaScript, TypeScript, 
                            Node.js, HTML5, Express, Mongoose, Redux, REST API, GraphQL, 
                            Apollo, MongoDB
                        </p>
                        <p>
                            <strong>Framework:</strong> React, NextJS
                        </p>
                        <p>
                            <strong>Design i UI:</strong> CSS3, Bootstrap, SemanticUI, Responsive Web Design
                        </p>
                        <p>
                            <strong>Kontrola wersjii I inne narzędzia:</strong> Git, Github, Webpack, Jest, NPM, Yarn
                        </p>
                        <p>
                            <strong>Inne umiejętności:</strong> Obsługa kienta, Organizacja czasem, Praca zespołowa, Efektywna komunikacja, Otwartość na nowe wyzwania
                        </p>
                    </article>
                    <article>
                        <h3>
                        <   span className='icon projectIcon'></span>Projekt
                        </h3>
                        <div className='section-subheading'>
                            <h5 className='subheading'>Portal schronisk dla zwierząt</h5>
                            <p className='p-left-margin'><a className='link-black' href='#' target='blank'><span className='icon githubIcon'></span>Zobacz kod</a></p>
                            <p className='p-left-margin'><a className='link-black' href='#' target='blank'><span className='icon webIcon'></span>Zobacz aplikację</a></p>
                        </div>
                        <p>
                            <u>Użyte technologie:</u> JavaScript, React, Apollo, GraphQL, MongoDB, Mongoose, 
                            SemanticUI, GoogleMaps API, JWT
                        </p>
                        <p>
                            <u>Opis:</u> W tej aplikacji zebrane są dane kontaktowe prawie 100 prawdziwych schronisk 
                            dla zwierząt na terenie Polski, łącznie z ich lokalizacją wyświetloną na mapie. 
                            Użytkownik może zobaczyć jakie zwierzęta znajdują się obecnie w danym 
                            schronisku (dane fikcyjne) i wysłać zapytanie do schroniska. Użytkownik może 
                            zarejestrować konto w serwisie dla siebie, lub by zarządzać schroniskiem – 
                            może wtedy, międzyinnymi,  dodawać, usuwać lub zmieniać dane zwierząt i schroniska. 
                        </p>

                    </article>
                    <article>
                        <h3>
                            <span className='icon workIcon'></span>Doświadczenie Zawodowe
                        </h3>
                        <div>
                            <div className='section-subheading'>
                                <h5 className='subheading'>Case Manager</h5>
                                <p>06.2015 - 06.2019</p>
                            </div>
                            <p>
                                South Hams District Council &amp; West Devon Borough Council (Urzędy Powiatowe), Anglia
                            </p>
                            <ul>
                                <li>
                                    Zarządzanie procesami związanymi z aplikacjami o pozwolenie na budowę w oparciu o regulacje krajowe, 
                                    włącznie ze sprawdzaniem dokumentacji, wprowadzanie informacji do bazy danych, 
                                    publikacja dokumentacji na stronach internetowych i prowadzenie konsultacji z 
                                    mieszkańcami, radnymi, organizacjami państwowymi i pozarządowymi 
                                </li>
                                <li>
                                    Organizacja publicznych spotkań, np. rozpraw administracyjnych i odwoławczych
                                </li>
                                <li>
                                    Szkolenie i wspomaganie dla specjalistów i innych nowozatrudnionych w zakresie obsługi oprogramowania 
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className='section-subheading'>
                                <h5 className='subheading'>Business Support Assistant</h5>
                                <p>10.2013 - 05.2015</p>
                            </div>
                            <p>
                                South Hams District Council (Urząd Powiatowy), Anglia
                            </p>
                            <ul>
                                <li>
                                    Obsługa klienta dla mieszkańców, radnych, architektów, poprzez e-mail, telefon i kontakty osobiste
                                </li>
                                <li>
                                    Zarządzanie dokumentacją w baze danych i na stronie internetowej Urzędu
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article>
                        <h3>
                            <span className='icon educationIcon'></span>Wykształcenie
                        </h3>
                        <div>
                            <div className='section-subheading'>
                                    <h5 className='subheading'>Stosunki Międzynarodowe – magister</h5>
                                    <p>09.2012 - 10.2013</p>
                            </div>
                            <p className='uni-name'>University of Exeter, Anglia</p>
                        </div>
                        <div>
                            <div className='section-subheading'>
                                <h5 className='subheading'>Stosunki Międzynarodowe - licencjat</h5>
                                <p>09.2009 - 06.2012</p>
                            </div>
                            <p className='uni-name'>Keele University, Anglia</p>
                        </div>
                    </article>
                </main>
            </div>
            <footer>
                Wyrażam zgodę na przetwarzanie moich danych osobowych 
                dla potrzeb niezbędnych do realizacji procesu rekrutacji 
                (zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych 
                osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z 
                Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 
                z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych 
                w związku z przetwarzaniem danych osobowych i w sprawie swobodnego 
                przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO)).
            </footer>
        </div>
    )
}

export default CVpl