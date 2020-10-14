import Page from '../components/base_page';

import css from '../styles/common.module.scss';


export default function About() {
    return (
        <Page>
            <h1 className={css.title}>
                About Us
            </h1>

            <br />

            <div className={css.card}>
                
                <h3>Vision</h3>
                <p>An increasingly digitally connected world brings opportunity to give more access to the Christian gospel and resources to help them live out their faith. Awe & Reverence brings modern technology to an ancient faith. While the Christian life consists of interdependent practices, such as prayer, worship, Bible study, and meditation, the utilization of advanced technology to aid these practices in a harmonious way does not exist. Additionally, world-wide access to Christian worship and study resources in multiple languages is lacking.</p>
                
                <br />
        
                <p>Awe & Reverence is building a world-class ecosystem of meaningful applications designed to facilitate and enhance the practice of the Christian faith. We are doing that by building individual applications focused on particular aspects of Christian worship, while keeping an overall vision to ensure that these individual apps seamlessly integrate within the A&R ecosystem. We will achieve a cohesiveness that has never been done before by utilizing metadata, data science, natural language processing, and other advanced logic. Simply put, we are applying the most advanced technologies to encourage rich and deep worship of the God who is deserving of all of our worship. And we're doing this in as many languages as possible!</p>
                
                <br />
            </div>
        </Page>
    );
}
