import '../styles/styles.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MySelfieBooth - Photobooth pour vos événements</title>
        <meta name="description" content="Offrez une expérience photo unique avec MySelfieBooth." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
