import { AppProps } from 'next/app';
import { Amplify } from 'aws-amplify';
import Head from 'next/head';
import './styles.css';
import { AmplifyConfig } from '../config/amplify';

Amplify.configure(AmplifyConfig);

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to app-example-next!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
