import Page from '@/components/base_page';

import css from '@/styles/common.module.scss';

export default function TermsOfService() {
    return (
        <Page>
            <h1 className={css.title}>Terms of Service</h1>

            <br />

            <div className={css.legalContent}>
                <p>
                    <strong>Effective Date:</strong> April 3, 2026
                </p>
                <p>
                    <strong>Last Updated:</strong> April 3, 2026
                </p>

                <br />

                <p>
                    Welcome to Awe & Reverence. By accessing or using our
                    websites, applications, and services (collectively, the
                    &ldquo;Services&rdquo;), you agree to be bound by these
                    Terms of Service (&ldquo;Terms&rdquo;). If you do not agree
                    to these Terms, please do not use the Services.
                </p>

                <br />

                <h3>1. About Us</h3>
                <p>
                    Awe & Reverence is a Christian software company building
                    tools for worship, prayer, Bible study, and faith. Our
                    Services include websites such as aweandreverence.com,
                    maskil.church, awesome.bible, and related applications.
                </p>

                <br />

                <h3>2. Eligibility</h3>
                <p>
                    You must be at least 13 years of age to use our Services. If
                    you are under 18, you represent that you have your parent or
                    guardian&rsquo;s permission to use the Services.
                </p>

                <br />

                <h3>3. Use of the Services</h3>
                <p>
                    You agree to use the Services only for lawful purposes and
                    in accordance with these Terms. You agree not to:
                </p>
                <ul>
                    <li>
                        Use the Services in any way that violates applicable law
                        or regulation.
                    </li>
                    <li>
                        Attempt to interfere with or disrupt the Services or
                        servers.
                    </li>
                    <li>
                        Attempt to gain unauthorized access to any part of the
                        Services.
                    </li>
                    <li>
                        Use automated means to access the Services without our
                        permission.
                    </li>
                    <li>
                        Use the Services to transmit harmful, offensive, or
                        objectionable content.
                    </li>
                </ul>

                <br />

                <h3>4. Intellectual Property</h3>
                <p>
                    All content, features, and functionality of the Services
                    &mdash; including text, graphics, logos, and software
                    &mdash; are owned by Awe & Reverence or our licensors and
                    are protected by copyright, trademark, and other
                    intellectual property laws.
                </p>

                <br />

                <h3>5. User Content</h3>
                <p>
                    If you submit content through our Services (such as prayer
                    requests or other user-generated content), you grant Awe &
                    Reverence a non-exclusive, royalty-free license to use,
                    display, and distribute that content in connection with the
                    Services.
                </p>

                <br />

                <h3>6. Third-Party Services</h3>
                <p>
                    Our Services may contain links to third-party websites or
                    services. We are not responsible for the content or
                    practices of any third-party services.
                </p>

                <br />

                <h3>7. Disclaimers</h3>
                <p>
                    The Services are provided &ldquo;as is&rdquo; and &ldquo;as
                    available&rdquo; without warranties of any kind, either
                    express or implied. We do not warrant that the Services will
                    be uninterrupted, error-free, or secure.
                </p>

                <br />

                <h3>8. Limitation of Liability</h3>
                <p>
                    To the fullest extent permitted by law, Awe & Reverence
                    shall not be liable for any indirect, incidental, special,
                    consequential, or punitive damages arising out of or related
                    to your use of the Services.
                </p>

                <br />

                <h3>9. Changes to These Terms</h3>
                <p>
                    We may update these Terms from time to time. We will notify
                    you of material changes by posting the updated Terms on this
                    page with a new &ldquo;Last Updated&rdquo; date. Your
                    continued use of the Services after changes are posted
                    constitutes acceptance of the updated Terms.
                </p>

                <br />

                <h3>10. Governing Law</h3>
                <p>
                    These Terms are governed by the laws of the State of
                    California, without regard to conflict of law principles.
                </p>

                <br />

                <h3>11. Contact Us</h3>
                <p>
                    If you have questions about these Terms, please contact us
                    at{' '}
                    <a href="mailto:hello@aweandreverence.com">
                        hello@aweandreverence.com
                    </a>
                    .
                </p>
            </div>
        </Page>
    );
}
