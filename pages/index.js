import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Awe and Reverence</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>


        <h1 className={styles.title}>
          Awe and Reverence
        </h1>

        <div className={styles.grid}>
          <i>Because Your <b>lovingkindness is better</b> than life, My lips will praise You.</i> - Psalm 63:3
        </div>
      </main>

      <footer className={styles.footer}>
        &copy; Awe and Reverence 2020
      </footer>
    </div>
  )
}
