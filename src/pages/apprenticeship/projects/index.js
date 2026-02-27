import Obfuscate from 'react-obfuscate';

import Link from 'next/link';

import Page from '@/components/base_page';

import css from '@/styles/common.module.scss';

export default function ApprenticeshipProjects() {
    return (
        <Page>
            <h1 className={css.title}>Live Instruction Projects</h1>

            <br />

            <img
                src="https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className={css.image}
            />

            <div className={css.card}>
                <p>
                    <ul>
                        <li>
                            <Link href="projects/tictactoe">Tic Tac Toe</Link>
                        </li>
                    </ul>
                </p>
            </div>
        </Page>
    );
}
