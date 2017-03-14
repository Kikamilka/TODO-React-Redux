import React from 'react';
import FilterLink from '../containers/FilterLink';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

const Footer = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                Show:
            </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem>
                    <FilterLink filter="all">
                        All
                    </FilterLink>
                </NavItem>
                <NavItem>
                    <FilterLink filter="active">
                        Active
                    </FilterLink>
                </NavItem>
                <NavItem>
                    <FilterLink filter="completed">
                        Completed
                    </FilterLink>
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Footer;
