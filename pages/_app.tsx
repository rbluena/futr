import type { AppProps } from 'next/app';
import Layout from '@app/components/Layout';
import Footer from '@app/components/Footer';
import '@app/styles/main.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}

export default MyApp;
