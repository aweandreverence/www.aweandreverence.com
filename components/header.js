import classNames from 'classnames';

import Nav from 'react-bootstrap/Nav';

import Link from 'next/link';
import { useRouter } from 'next/router';

import css from '../styles/header.module.scss';
import { NAV_LINKS } from '../constants/nav_links.js';
import { Container, Navbar } from 'react-bootstrap';

export function Header({ children }) {
    const router = useRouter();
    const navItemsJSX = NAV_LINKS.map((link, index) => {
        const classes = classNames({
            [css.active]: link.url === router.pathname,
            ...{ 'text-dark': true },
        });
        const target = link.url.substring(0, 4) === 'http' ? '_blank' : null;
        return (
            <Nav.Item key={`link-${index}`}>
                <Nav.Link href={link.url} className={classes} target={target}>
                    {link.name}
                </Nav.Link>
            </Nav.Item>
        );
    });
    return (
        <div className={css.header}>
            <Navbar expand="sm navbar-light">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>{navItemsJSX}</Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
