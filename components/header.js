import Link from 'next/link';

import css from '../styles/header.module.scss';

import Nav from 'react-bootstrap/Nav';
//import NavItem from 'react-bootstrap/NavItem';
//import NavLink from 'react-bootstrap/NavLink';

//navData = [
//    {page: "Home", path: "/"},
//    {page: "About", path: "/about"},
//    {page: "Apprenticeship", path: "/apprenticeship"}
//];



function Header({ children }) {
    return (
        <div className={css.header}>
            <Nav>
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="https://maskil.church" target="_blank">Maskil</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/apprenticeship">Apprenticeship</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default Header;
