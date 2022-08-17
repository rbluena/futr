import type { AppProps } from 'next/app';
import Layout from '@app/components/layouts/BaseLayout';
import Footer from '@app/components/layouts/Footer';
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
