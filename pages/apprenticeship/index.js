import Link from 'next/link';
import Obfuscate from 'react-obfuscate';

import Page from '@/components/base_page';
import css from '@/styles/common.module.scss';
import { SKILLS_LIST } from '@/components/skills_list.js';

export default function Apprenticeship() {
    return (
        <Page>
            <h1 className={css.title}>Software Apprenticeship</h1>

            <br />

            <img
                src="https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
                className={css.image}
            />

            <div className={css.card}>
                <h3>What is this?</h3>
                <p>
                    Our apprenticeship program aims to equip and train aspiring
                    Christian software engineers with tangible skills to succeed
                    in their craft. We have mentored dozens of engineers over
                    the years and provided a post-bootcamp onboarding experience
                    for more junior engineers to get real world, collaborative,
                    team experience. Several of our apprentices have gone on to
                    full-time software engineering roles and are junior,
                    mid-level, and senior-level engineers at household-name tech
                    companies.
                </p>
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
                <p>
                    The first project that A&R has been focused on is called
                    Maskil; envisioned to be the FIRST EVER digital hymnal and
                    worship study Bible. (Imagine every worship song, every
                    language, with (Rap)Genius-style inline annotations and
                    two-way links to Bible passages). Currently Maskil has 500+
                    songs in English, 650+ songs in Korean, and growing!
                </p>

                <br />

                <p>
                    Other apps that we are working on include Awesome.Bible, a
                    Bible study app; Phileo.church, a church directory and
                    membership management app, and a few other projects.
                </p>

                <p>
                    We have a feature roadmap planned out for years. You will be
                    working collaboratively with a small team of engineers.
                </p>

                <br />

                <p>
                    Some of the technologies you will learn and be exposed to
                    include:
                </p>

                <br />

                <SKILLS_LIST />
            </div>

            <div className={css.card}>
                <h3>Learning Methodologies</h3>

                <p>
                    Apprentices have opportunities to learn through working on
                    real world, large-scale software engineering projects and
                    assignments and in teams, so as to learn about SDLC (
                    <a
                        href="https://en.wikipedia.org/wiki/Systems_development_life_cycle"
                        target="_blank"
                    >
                        software development lifecycle
                    </a>
                    ) in a real work setting, which is often not offered in many
                    traditional college or university-level computer science
                    programs; although, the importance of computer science
                    fundamentals is emphasized and we encourage apprentices to
                    pursue these on their own. We also have meetings throughout
                    the week and opportunities to learn in a group setting
                    through building functional software through live
                    instruction (see{' '}
                    <Link href="/apprenticeship/projects">
                        some of the projects
                    </Link>{' '}
                    we have built through live instruction).
                </p>
                <br />
                <p>
                    We also have a strong emphasis on mentorship and
                    apprenticeship, where apprentices are paired with mentors
                    who are experienced software engineers and who can provide
                    guidance and support to the apprentice as they learn and
                    grow in their software engineering skills.
                </p>
            </div>

            <div className={css.card}>
                <h3>Outcomes</h3>

                <p>
                    It is difficult to predict with any high degree of certainty
                    what outcomes that each individual apprentice will have.
                    Individual outcomes will vary based on the individual's
                    effort, commitment, and ability to learn and grow. However,
                    we have seen that apprentices who have been diligent in
                    their work and have shown a high degree of commitment and
                    effort have been able to secure full-time software
                    engineering roles at companies such as Google and other
                    well-known tech companies and prestigious startups.
                </p>

                <p></p>
            </div>

            <div className={css.card}>
                <h3>Values</h3>

                <p>
                    Awe and Reverence is a Christian organization which holds
                    the Bible, which is God's word, as our highest authority. We
                    believe that the Bible is the inspired word of God and is
                    inerrant and infallible. We believe that the Bible is the
                    final authority on all matters of faith and practice.
                    <br />
                    At the same time, we strive for excellence in all that we
                    do, while giving all the glory to God. We believe that we
                    are to work as unto the Lord and not unto men (Colossians
                    3:23). We believe that we are to do all things for the glory
                    of God (1 Corinthians 10:31). We believe that man was
                    created to work (Genesis 2:15) and that work is a gift from
                    God (Ecclesiastes 3:13), and that the fruits of our labor
                    are gifts meant to be enjoyed and shared with others
                    (Ephesians 4:28; 2 Thessalonians 3:10).
                </p>
                <p>
                    The song{' '}
                    <a
                        href="https://maskil.church/songs/347-My-Worth-Is-Not-In-What-I-Own-At-The-Cross"
                        target="_blank"
                    >
                        My Worth is Not In What I Own
                    </a>{' '}
                    portrays our values well:
                </p>
                <p>
                    <blockquote
                        class="blockquote"
                        cite="https://maskil.church/songs/347-My-Worth-Is-Not-In-What-I-Own-At-The-Cross"
                    >
                        <p>
                            My worth is not in what I own;
                            <br />
                            Not in the strength of flesh and bone.
                            <br />
                            But in the costly wounds of love at the cross.{' '}
                            <br />
                        </p>
                        <p>
                            My worth is not in skill or name;
                            <br />
                            In win or lose, in pride or shame.
                            <br />
                            But in the blood of Christ that flowed at the cross.
                            <br />
                        </p>
                    </blockquote>
                </p>
            </div>

            <div className={css.card}>
                <p>
                    Interested in joining our software apprenticeship? We'd love
                    to hear from you! Send an email on why you'll be a good fit
                    for this apprenticeship to{' '}
                    <b>
                        <Obfuscate
                            email="hello@aweandreverence.com"
                            headers={{
                                subject: 'Awe & Reverence Apprenticeship',
                            }}
                        />
                    </b>
                </p>
            </div>
        </Page>
    );
}
