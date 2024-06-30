// pages/index.tsx
import Head from 'next/head';
import Calculator from '../components/Calculator';
import styles from './styles/Home.module.css';

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Calculator</title>
                <meta name="description" content="A simple calculator built with Next.js and TypeScript" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Calculator</h1>
                <Calculator />
            </main>
        </div>
    );
};

export default Home;
