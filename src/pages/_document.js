import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Chemin correct pour inclure un fichier CSS dans le dossier public */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
