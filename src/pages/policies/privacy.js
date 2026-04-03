import Page from '@/components/base_page';

import css from '@/styles/common.module.scss';

export default function PrivacyPolicy() {
    return (
        <Page>
            <h1 className={css.title}>Privacy Policy</h1>

            <br />

            <div className={css.textleft}>
                <p>
                    <strong>Effective Date:</strong> April 3, 2026
                </p>
                <p>
                    <strong>Last Updated:</strong> April 3, 2026
                </p>

                <br />

                <p>
                    Awe & Reverence (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                    &ldquo;our&rdquo;) respects your privacy and is committed to
                    protecting your personal information. This Privacy Policy
                    describes how we collect, use, and share information when
                    you use our websites, applications, and services
                    (collectively, the &ldquo;Services&rdquo;).
                </p>

                <br />

                <h3>1. Information We Collect</h3>

                <h4>Information You Provide</h4>
                <ul>
                    <li>
                        <strong>Account information:</strong> Name, email
                        address, and other details you provide when creating an
                        account.
                    </li>
                    <li>
                        <strong>User content:</strong> Prayer requests, notes,
                        and other content you submit through the Services.
                    </li>
                    <li>
                        <strong>Communications:</strong> Information you provide
                        when contacting us for support or feedback.
                    </li>
                </ul>

                <h4>Information Collected Automatically</h4>
                <ul>
                    <li>
                        <strong>Usage data:</strong> Pages visited, features
                        used, and interactions with the Services.
                    </li>
                    <li>
                        <strong>Device information:</strong> Browser type,
                        operating system, and device identifiers.
                    </li>
                    <li>
                        <strong>Log data:</strong> IP address, access times, and
                        referring URLs.
                    </li>
                </ul>

                <br />

                <h3>2. How We Use Your Information</h3>
                <p>We use the information we collect to:</p>
                <ul>
                    <li>Provide, maintain, and improve the Services.</li>
                    <li>Personalize your experience.</li>
                    <li>Respond to your requests and communications.</li>
                    <li>
                        Send you updates and notifications related to the
                        Services (you can opt out at any time).
                    </li>
                    <li>Analyze usage patterns to improve our Services.</li>
                    <li>Protect against fraud and abuse.</li>
                </ul>

                <br />

                <h3>3. How We Share Your Information</h3>
                <p>
                    We do not sell your personal information. We may share your
                    information in the following circumstances:
                </p>
                <ul>
                    <li>
                        <strong>Service providers:</strong> With trusted
                        third-party vendors who assist us in operating the
                        Services (e.g., hosting, analytics).
                    </li>
                    <li>
                        <strong>Legal requirements:</strong> When required by
                        law, regulation, or legal process.
                    </li>
                    <li>
                        <strong>Protection:</strong> To protect the rights,
                        safety, or property of Awe & Reverence, our users, or
                        the public.
                    </li>
                    <li>
                        <strong>With your consent:</strong> When you have given
                        us explicit permission.
                    </li>
                </ul>

                <br />

                <h3>4. Data Retention</h3>
                <p>
                    We retain your information for as long as your account is
                    active or as needed to provide the Services. We may also
                    retain information as required by law or for legitimate
                    business purposes.
                </p>

                <br />

                <h3>5. Data Security</h3>
                <p>
                    We implement reasonable technical and organizational
                    measures to protect your personal information. However, no
                    method of transmission over the Internet or electronic
                    storage is completely secure, and we cannot guarantee
                    absolute security.
                </p>

                <br />

                <h3>6. Your Rights</h3>
                <p>Depending on your location, you may have the right to:</p>
                <ul>
                    <li>Access the personal information we hold about you.</li>
                    <li>
                        Request correction or deletion of your personal
                        information.
                    </li>
                    <li>
                        Object to or restrict certain processing of your
                        information.
                    </li>
                    <li>Request a copy of your data in a portable format.</li>
                </ul>
                <p>
                    To exercise any of these rights, please contact us at{' '}
                    <a href="mailto:hello@aweandreverence.com">
                        hello@aweandreverence.com
                    </a>
                    .
                </p>

                <br />

                <h3>7. Children&rsquo;s Privacy</h3>
                <p>
                    Our Services are not directed to children under 13. We do
                    not knowingly collect personal information from children
                    under 13. If we learn that we have collected information
                    from a child under 13, we will take steps to delete it
                    promptly.
                </p>

                <br />

                <h3>8. Cookies and Tracking</h3>
                <p>
                    We may use cookies and similar tracking technologies to
                    enhance your experience. You can control cookie preferences
                    through your browser settings. Disabling cookies may limit
                    certain features of the Services.
                </p>

                <br />

                <h3>9. Third-Party Links</h3>
                <p>
                    Our Services may contain links to third-party websites. We
                    are not responsible for the privacy practices of those
                    websites. We encourage you to review their privacy policies.
                </p>

                <br />

                <h3>10. Changes to This Policy</h3>
                <p>
                    We may update this Privacy Policy from time to time. We will
                    notify you of material changes by posting the updated policy
                    on this page with a new &ldquo;Last Updated&rdquo; date.
                </p>

                <br />

                <h3>11. Contact Us</h3>
                <p>
                    If you have questions about this Privacy Policy, please
                    contact us at{' '}
                    <a href="mailto:hello@aweandreverence.com">
                        hello@aweandreverence.com
                    </a>
                    .
                </p>
            </div>
        </Page>
    );
}
