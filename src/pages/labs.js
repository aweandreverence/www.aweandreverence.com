import { Col, Row } from 'react-bootstrap';

import Page from '@/components/base_page';

import css from '@/styles/common.module.scss';

export default function Labs() {
    return (
        <Page>
            <h1 className={css.title}>Labs</h1>

            <br />

            <Row className={css.imgText}>
                <Col>
                    <div className={css.textleft}>
                        <div className={css.card}>
                            <p>
                                Here at Awe & Reverence, we're always cooking up
                                ideas for new products for Kingdom-impacting
                                products and building prototypes. As a group of
                                creatives, artists, and builders endowed with
                                gifts from the Creator, we're always striving to
                                improve our craft.
                            </p>
                            <br />
                            <p>
                                The following are some of the products that are
                                currently under various stages (prototype,
                                alpha, or beta) of development:
                            </p>
                            <ul>
                                <li>
                                    <a href="https://john316.aweandreverence.com">
                                        The Gospel
                                    </a>{' '}
                                    (React Native app for sharing the gospel)
                                </li>
                                <li>
                                    <a href="http://treasuredword.aweandreverence.com">
                                        Treasured Word
                                    </a>{' '}
                                    (social "playlists" for the Bible)
                                </li>
                                <li>
                                    <a href="http://imdbible.aweandreverence.com">
                                        IMDBible
                                    </a>
                                </li>
                                <li>
                                    <a href="https://slackin.church">
                                        Slackin.Church
                                    </a>{' '}
                                    (Slack bot for churches)
                                </li>
                                <li>
                                    <a href="http://neighbornear.me">
                                        NeighborNear.Me
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col>
                    <img
                        src="https://images.unsplash.com/photo-1531771686035-25f47595c87a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80"
                        className={css.imgright}
                    />
                </Col>
            </Row>
        </Page>
    );
}
