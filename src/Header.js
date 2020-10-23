import React, { useState } from 'react';
import { Jumbotron, Container, Nav, NavItem, NavLink } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
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
                            <FontAwesomeIcon icon={faGlobeAmericas} size='2x' />
                        </div>
                        <div className='col-2'>
                            <FontAwesomeIcon icon={faClock} size='2x' onClick={toggle} />
                            <Modal isOpen={modal} toggle={toggle}>
                                <ModalHeader toggle={toggle}>
                                    don't come here.
                                </ModalHeader>
                                <ModalBody>
                                    we are currently closed due to covid-19.
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={toggle}>okay</Button>
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