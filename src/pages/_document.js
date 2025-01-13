import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Chemin correct pour inclure un fichier CSS dans le dossier public */}
        <link rel="stylesheet" href="public/styles/styles.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
