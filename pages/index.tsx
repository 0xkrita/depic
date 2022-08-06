import type { NextPage } from 'next';
import Head from 'next/head';
import AppWrapper from '../components/AppWrapper';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DEPIC</title>
        <meta name="description" content="A Hackathon Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppWrapper>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut aliquam
          purus sit amet. Risus nec feugiat in fermentum. Ac felis donec et odio
          pellentesque diam. Aliquam ultrices sagittis orci a scelerisque purus
          semper eget duis.
        </p>
      </AppWrapper>
      {/* <WhiteBoard></WhiteBoard> */}
    </div>
  );
};

export default Home;
