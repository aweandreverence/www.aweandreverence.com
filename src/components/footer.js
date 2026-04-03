import Link from 'next/link';

import { library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import css from '@/styles/footer.module.scss';

library.add(fab, faFacebookF, faTwitter);

export function Footer({ children }) {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className={css.footer}>
                <div className={css.socialmedia}>
                    <div className={css.facebook}>
                        <a
                            href="https://www.facebook.com/AweAndReverence"
                            title="Awe & Reverence on Facebook"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className={css.icon}>
                                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                            </div>
                        </a>
                    </div>
                    <div className={css.twitter}>
                        <a
                            href="https://twitter.com/aweandreverence"
                            title="Awe & Reverence on Twitter"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className={css.icon}>
                                <FontAwesomeIcon icon={['fab', 'twitter']} />
                            </div>
                        </a>
                    </div>
                </div>
                <hr className={css.divider} />
                <div className={css.legal}>
                    <Link href="/policies/privacy">Privacy Policy</Link>
                    {' · '}
                    <Link href="/policies/tos">Terms of Service</Link>
                </div>
                <div className={css.copyright}>
                    <p>&copy; Awe &amp; Reverence {currentYear}</p>
                </div>
            </footer>
        </>
    );
}
