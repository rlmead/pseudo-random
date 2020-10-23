import React, { useState } from 'react';
import { Jumbotron, Container, Nav, NavItem, NavLink } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
    const [clockModal, setClockModal] = useState(false);
    const toggleClock = () => setClockModal(!clockModal);
    const [globeModal, setGlobeModal] = useState(false);
    const toggleGlobe = () => setGlobeModal(!globeModal);
    return (
        <>
            {/* header image with restaurant name */}
            <Jumbotron
                fluid
                className='mb-1 text-left'
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544070078-a212eda27b49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop)', backgroundSize: '100%' }}>
                <Container
                    className='text-light'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1>pseudo random</h1>
                            <h3>lex ky</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2 offset-8'>
                            <FontAwesomeIcon icon={faGlobeAmericas} size='2x' onClick={toggleGlobe} />
                            <Modal isOpen={globeModal} toggleGlobe={toggleGlobe}>
                                <ModalHeader toggleGlobe={toggleGlobe}>
                                    here's where we live.
                                </ModalHeader>
                                <ModalBody className='text-center'>
                                    <div>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.211231743014!2d-84.49472698490791!3d38.04216420450369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884244e844532c33%3A0xb6919957af36b713!2s348%20E%20Main%20St%2C%20Lexington%2C%20KY%2040507!5e0!3m2!1sen!2sus!4v1603461835503!5m2!1sen!2sus"></iframe>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={toggleGlobe}>okay</Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                        <div className='col-2'>
                            <FontAwesomeIcon icon={faClock} size='2x' onClick={toggleClock} />
                            <Modal isOpen={clockModal} toggleClock={toggleClock}>
                                <ModalHeader toggleClock={toggleClock}>
                                    don't come here.
                                </ModalHeader>
                                <ModalBody>
                                    we are currently closed due to covid-19.
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={toggleClock}>okay</Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </div>
                </Container>
            </Jumbotron>

            {/* nav bar with buttons that run setMenuView */}
            <Nav
                justified
                tabs>
                {
                    props.menuSections.map((item, index) => {
                        return (
                            <NavItem
                                key={'button-' + index}>
                                <NavLink
                                    className={(props.menuView === item.name) ? 'active' : ''}
                                    id={item.name}
                                    onClick={() => props.setView(item.name)}>
                                    <h5>{item.name}</h5>
                                </NavLink>
                            </NavItem>
                        )
                    })
                }
            </Nav>
        </>
    )
}

export default Header;