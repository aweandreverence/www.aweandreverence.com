import Page from '../components/base_page';

import css from '../styles/common.module.scss';

import Button from 'react-bootstrap/Button';

export default function Home() {
    return (
        <Page>
            <div className={css.imgwithtext}>
                <img src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                <div>
                    <h1 className={css.title}>
                        Awe and Reverence
                    </h1>
                    <i>Because Your <b>lovingkindness is better</b> than life, My lips will praise You.</i> - Psalm 63:3
                </div>
            </div>

            <br />
        
            <div className={css.card}>
                <h3>Apprenticeship</h3>
                <p>Our founder, Jonathan Tsai, started an apprenticeship program at A&R to train and equip aspiring Christian software engineers with tangible skills. In the SF Bay Area there is an ever-increasing number of people coming out of coding bootcamps trying to transition into software roles from other industries. Unfortunately, opportunities for bootcamp grads have severely declined since 2015 and many people are struggling to find employment after investing substantially into building their coding skills...</p>
                <br />
                <Button href="/apprenticeship" variant="outline-dark">Learn More</Button>
            </div>
            
            <hr />

            <div className={css.card}>
                <h3>Who We Are</h3>
            <p>Awe & Reverence (A&R) is a software company committed to building a God-glorifying, for-profit (read: sustainable), for-Kingdom benefit, cutting-edge Christian software company.</p>
                <br />
                <Button href="/about" variant="outline-dark">Read More</Button>
            </div>

        </Page>
    );
}
