import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Obfuscate from 'react-obfuscate';

import Page from '../components/base_page';
import css from '../styles/common.module.scss';
import SKILLS_LIST from '../components/skills_list.js';

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
                <p>Our apprenticeship program aims to equip and train aspiring Christian software engineers with tangible skills to succeed in their craft. We have mentored dozens of engineers over the years and provided a post-bootcamp onboarding experience for more junior engineers to get real world, collaborative, team experience. Several of our apprentices have gone on to full-time software engineering roles and are junior, mid-level, and senior-level engineers at household-name tech companies.</p>

            </div>
	    
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

                <SKILLS_LIST />

            </div>

            <div className={css.card}>
                <p>Interested in joining our software apprenticeship? We'd love to hear from you! Send an email on why you'll be a good fit for this apprenticeship to <b><Obfuscate email="hello@aweandreverence.com" headers={{subject: 'Awe & Reverence Apprenticeship'}} /></b></p>

            </div>

        </Page>
    );
}
