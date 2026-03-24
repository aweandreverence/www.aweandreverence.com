import css from '@/styles/contact.module.scss';

export function Contact({ children }) {
    return (
        <div className={css.contact}>
            <hr />
            <br />
            <h3>Say Hello</h3>
            <p>We would love to hear from you!</p>
            <br />
            <a
                className="btn btn-outline-dark"
                href="mailto:hello@aweandreverence.com"
            >
                Contact Us
            </a>
        </div>
    );
}
