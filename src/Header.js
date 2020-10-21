import React from 'react';
import { Jumbotron, Container, Nav, NavItem, NavLink } from 'reactstrap';

function Header(props) {
    return (
        <>
            {/* static header with restaurant name */}
            {/* exciting food picture (semi-transparent?) as background */}
            {/* https://images.unsplash.com/photo-1561043433-aaf687c4cf04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80 */}
            {/* {
                let imgStyle = {
                backgroundImage: 'url(https://images.unsplash.com/photo-1561043433-aaf687c4cf04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)'
            };
            } */}

            <Jumbotron
                fluid
                style={{backgroundImage:'url(https://images.unsplash.com/photo-1544070078-a212eda27b49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80)'}}>
                <Container
                className='text-light'>
                    <h1>pseudo random</h1>
                    <p>three forty eight east main street lexington kentucky united states of america</p>
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
                                    {item.name}
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