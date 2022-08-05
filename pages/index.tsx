import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DEPIC</title>
        <meta name="description" content="A Hackathon Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Hello World</p>
    </div>
  )
}

export default Home
