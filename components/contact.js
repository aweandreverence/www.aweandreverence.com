import css from '../styles/contact.module.scss';

import Button from 'react-bootstrap/Button';
import Obfuscate from 'react-obfuscate';

function Contact({ children }) {
    return (
        <div className={css.contact}>
            <hr />
            <br />
            <h3>Say Hello</h3>
            <p>We'd love to hear from you!</p>
            <br />
            <Obfuscate email="hello@aweandreverence.com"><Button variant="outline-dark">Contact Us</Button></Obfuscate>
        </div>
    );
}

export default Contact;
