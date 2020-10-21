import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

function Header(props) {
    return (
        <>
            {/* static header with restaurant name */}
            {/* exciting food picture (semi-transparent?) as background */}
            <h1>pseudo random</h1>
            <p>three forty eight east main street lexington kentucky united states of america</p>
            {/* nav bar with buttons that run setMenuView */}
            <Nav
                justified={true}
                tabs={true}>
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