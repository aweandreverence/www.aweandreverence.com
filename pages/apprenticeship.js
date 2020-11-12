import Page from '../components/base_page';

import css from '../styles/common.module.scss';

import Button from 'react-bootstrap/Button';
import Obfuscate from 'react-obfuscate';

export default function Apprenticeship() {
    return (
        <Page>
            <h1 className={css.title}>
                Software Apprenticeship
            </h1>

            <br />

            <img src="https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" className={css.image} />
        
            <div className={css.card}>

                <h3>What is this?</h3>
                <p>Our founder, Jonathan Tsai, started an apprenticeship program at Awe & Reverence (A&R) to train aspiring Christian software engineers to equip them with tangible skills to succeed in their craft. Jonathan has mentored dozens of engineers over the years, and through the software apprenticeship has provided a post-bootcamp onbaording experience for more junior engineers to get real world, collaborative, team experience. Several of them have gone on to full-time software engineering roles and are junior, mid-level, and senior-level engineers at household-name tech companies.</p>

                <br />

                <p>Not only will you gain invaluable experience, you'll also be paid for your work! Each feature/task will have a bounty with a dollar amount associated with it. The larger the feature/task, the larger the bounty. We don't believe in muzzling the ox here.</p>

            </div>

            <br />

            <div className={css.card}>

                <h3>What are the qualifications?</h3>
                <p>Born again Christian that is FAT!</p>

                <br />

                <p>F - Faithful</p>
                <p>A - Available</p>
                <p>T - Teachable</p>

            </div>

            <br />

            <div className={css.card}>

                <h3>What are the responsibilities?</h3>
                <p>The first project that A&R has been focused on is called Maskil; envisioned to be the FIRST EVER digital hymnal and worship study Bible. (Imagine every worship song, every language, with (Rap)Genius-style inline annotations and two-way links to Bible passages). Currently Maskil has 350+ songs in English, 650+ songs in Korean, and growing!</p>

                <br />

                <p>We have a feature roadmap planned out for years. You will be working collaboratively with a small team of engineers.</p>

                <br />

                <p>Some of the technologies you will learn and be exposed to include:</p>

                <br />

                <p>-Django</p>
                <p>-React</p>
                <p>-MySQL</p>
                <p>-LESS CSS</p>
                <p>-Git Workflow</p>

            </div>

            <br />
        
            <div className={css.card}>
                <h3>Say Hello</h3>
                <p>Interested in joining our software apprenticeship? We'd love to hear from you! Send an email on why you'll be a good fit for this apprenticeship to <b><Obfuscate email="hello@aweandreverence.com" headers={{subject: 'Awe & Reverence\
 Apprenticeship'}} /></b></p>

            </div>

        </Page>
    );
}
