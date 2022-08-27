import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import AppWrapper from '../components/AppWrapper';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const WhiteBoard = dynamic(() => import('../components/WhiteBoard'), {
    ssr: false,
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>DEPIC</title>
        <meta name="description" content="A Hackathon Project" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎨</text></svg>"
        />
      </Head>
      <div>
        <Image
          alt="KodeLife"
          src="/images/KodeLife.png"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <AppWrapper>
        <>
          {/* <MintModal></MintModal> */}
          {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut aliquam
          purus sit amet. Risus nec feugiat in fermentum. Ac felis donec et odio
          pellentesque diam. Aliquam ultrices sagittis orci a scelerisque purus
          semper eget duis.
        </p> */}
          {/* <DepicConsole></DepicConsole> */}
          <WhiteBoard></WhiteBoard>
        </>
      </AppWrapper>
    </div>
  );
};

export default Home;
