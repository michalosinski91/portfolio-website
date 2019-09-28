import React from 'react'
import '../../styles/CVstyle.css'


const CVen = () => {
    return(
        <div className='container'>
            <div className='container-flex'>
                <aside>
                    <div className='aside-heading'>
                        <h2>MICHAL OSINSKI</h2>
                        <h4>Web Developer</h4>
                    </div>
                    <div className='aside-contact'>
                        <div className='aside-contact-links'>
                            <p><a className='link-white' href='mailto:hello@michalosinski.dev'><span className='icon emailIcon'></span>michal@michalosinski.dev</a></p>
                            <p><a className='link-white' href='http://www.michalosinski.dev/en' target='blank'><span className='icon webIcon'></span>michalosinski.dev</a></p>
                            <p><a className='link-white' href='https://www.linkedin.com/in/michalosinski91' target='blank'><span className='icon linkedInIcon'></span>/in/michalosinski91</a></p>
                            <p><a className='link-white' href='https://github.com/michalosinski91' target='blank'><span className='icon githubIcon'></span>/michalosinski91</a></p>
                        </div>
                    </div>
                    <div className='aside-language'>
                        <h4><span className='icon languageIcon'></span>Languages</h4>
                        <div className='aside-language-languages'>
                            <p><strong>Polish</strong> - native</p>
                            <p><strong>English</strong> - fluent</p>
                        </div>
                    </div>
                </aside>
                <main>
                    <article>
                        <h3>
                            <span className='icon profileIcon'></span>Profile
                        </h3>
                        <p>A driven and reliable full-stack web developer, interested in building services using modern JavaScript. 
                            Passionate about learning new skills and technologies. 
                            Looking for opportunities to contribute to exciting projects.
                        </p>
                    </article>
                    <article>
                        <h3>
                            <span className='icon skillsIcon'></span>Skills
                        </h3>
                        <p>
                            <strong>Web technologies and scripting:</strong> JavaScript, TypeScript, 
                            Node.js, HTML5, Express, Mongoose, Redux, REST API, GraphQL, 
                            Apollo, MongoDB
                        </p>
                        <p>
                            <strong>Frameworks:</strong> React, NextJS
                        </p>
                        <p>
                            <strong>Design and UI:</strong> CSS3, Bootstrap, SemanticUI, Responsive Web Design
                        </p>
                        <p>
                            <strong>Versioning and other tools:</strong> Git, Github, Webpack, Jest, NPM, Yarn
                        </p>
                        <p>
                            <strong>Non-technical skills:</strong> Customer service, Time management, Teamwork, Interpersonal communication, Adaptability
                        </p>
                    </article>
                    <article>
                        <h3>
                        <   span className='icon projectIcon'></span>Project
                        </h3>
                        <div className='section-subheading'>
                            <h5 className='subheading'>Animal Shelters web application</h5>
                            <p className='p-left-margin'><a className='link-black' href='#' target='blank'><span className='icon githubIcon'></span>View code</a></p>
                            <p className='p-left-margin'><a className='link-black' href='#' target='blank'><span className='icon webIcon'></span>Open application</a></p>
                        </div>
                        <p>
                            <u>Environment:</u> JavaScript, React, Apollo, GraphQL, MongoDB, Mongoose, 
                            SemanticUI, GoogleMaps API, JWT
                        </p>
                        <p>
                            <u>Description:</u> A web application which allows for a user to view almost 100 real animal shelters located in Poland, 
                            including their contact details and location on a map. Each shelter lists details of animals currently at the shelter 
                            (mock data) and allows for a user to contact the shelter regarding a particular animal. Users can create an account for 
                            their personal use, or to manage a shelter – including adding and removing animals from their shelter view, altering details 
                            of the shelter or individual animals from shelter. 
                        </p>

                    </article>
                    <article>
                        <h3>
                            <span className='icon workIcon'></span>Work Experience
                        </h3>
                        <div>
                            <div className='section-subheading'>
                                <h5 className='subheading'>Case Manager</h5>
                                <p>06.2015 - 06.2019</p>
                            </div>
                            <p>
                                South Hams District Council &amp; West Devon Borough Council, Totnes, UK
                            </p>
                            <ul>
                                <li>
                                    Management of the planning application process in line with national legislation, 
                                    including assessment if required documents have been submitted, database input, 
                                    publication of documents online, and consultation with stakeholders, such as elected 
                                    representatives, developers, NGOs and local residents
                                </li>
                                <li>
                                    Organisation of public meetings, such as appeal hearings and public inquiries
                                </li>
                                <li>
                                    Training and support for Planning Officers and new staff in use of software
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className='section-subheading'>
                                <h5 className='subheading'>Business Support Assistant</h5>
                                <p>10.2013 - 05.2015</p>
                            </div>
                            <p>
                                South Hams District Council, Totnes, UK
                            </p>
                            <ul>
                                <li>
                                    Providing customer service to local residents, architects and elected members of the Council via e-mail, telephone and face-to-face
                                </li>
                                <li>
                                    Processing and managing planning documentation on database and website
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article>
                        <h3>
                            <span className='icon educationIcon'></span>Education
                        </h3>
                        <div>
                            <div className='section-subheading'>
                                    <h5 className='subheading'>MA International Relations - Degree with Merit</h5>
                                    <p>09.2012 - 10.2013</p>
                            </div>
                            <p className='uni-name'>University of Exeter, UK</p>
                        </div>
                        <div>
                            <div className='section-subheading'>
                                <h5 className='subheading'>BA International Relations - 1st Class Degree</h5>
                                <p>09.2009 - 06.2012</p>
                            </div>
                            <p className='uni-name'>Keele University, UK</p>
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

export default CVen