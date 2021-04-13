import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { ThemeProvider } from 'styled-components';
import mintTheme from 'carbon-react/lib/style/themes/mint';
import AppWrapper from 'carbon-react/lib/components/app-wrapper';
import CustomCard from '../components/CustomCard';

export default function Home() {
  return (
    <ThemeProvider theme={mintTheme}>
      <AppWrapper
        style={{
          backgroundColor: 'rgba(0,0,0,0.15)',
          minHeight: '100vh',
        }}
      >
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <CustomCard />
        </main>
      </AppWrapper>
    </ThemeProvider>
  );
}
