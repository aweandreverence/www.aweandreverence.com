import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import css from '../styles/footer.module.scss';

library.add(fab, faFacebookF, faTwitter);

function Footer({ children }) {
    return (
        <footer className={css.footer}>
            <a href='https://www.facebook.com/AweAndReverence' title='Awe & Reverence on Facebook' target='_blank'>
                <div className={css.facebook}>
                    <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                </div>
            </a>

            <a href='https://twitter.com/aweandreverence' title='Awe & Reverence on Twitter' target='_blank'>
                <div className={css.twitter}>
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                </div>
            </a>
            &copy; Awe and Reverence 2020
        </footer>
    );
}

export default Footer;
