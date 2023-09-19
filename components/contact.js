import css from '../styles/contact.module.scss';

import Obfuscate from 'react-obfuscate';

export function Contact({ children }) {
    return (
        <div className={css.contact}>
            <hr />
            <br />
            <h3>Say Hello</h3>
            <p>We would love to hear from you!</p>
            <br />
            <Obfuscate
                className="btn btn-outline-dark"
                email="hello@aweandreverence.com"
            >
                Contact Us
            </Obfuscate>
        </div>
    );
}
