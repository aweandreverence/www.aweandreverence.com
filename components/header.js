import classNames from 'classnames';

import Nav from 'react-bootstrap/Nav';

import Link from 'next/link';
import { useRouter } from 'next/router';

import css from '../styles/header.module.scss';
import nav_links from './nav_links.js';

function Header({ children }) {
    const router = useRouter();
    const navItemsJSX = nav_links.map((link, index) => {
        const classes = classNames({
            [css.active]: link.url === router.pathname,
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
            <Nav>{navItemsJSX}</Nav>
        </div>
    );
}

export default Header;
