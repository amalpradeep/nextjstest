import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useMemo(() => {
    router.prefetch = async () => {};
  }, [router]);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
