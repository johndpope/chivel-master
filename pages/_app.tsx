import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { UserContextProvider } from '@/utils/contexts/useUser';
import { SWRConfig } from 'swr';
import { Toaster } from 'react-hot-toast';
import Script from 'next/script';
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NextSeo
        title='Unlimited Now Live'
        description='Earn more unlimited now'
        openGraph={{
          url: 'https://unlimitednow.live',
          title: 'Unlimited Now',
          description:
            'Save time and Money',
          images: [
            {
              url: 'https://unlimitednow.live/assets/images/red-and-black-friday-fashion-business-social-feed-ad-743x743.png',
              height: 600,
              width: 1200,
              alt: 'Save time and Money',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
          handle: '@unlimitednowio',
        }}
      />
      {process.env.NODE_ENV === 'production' && (
        <Script
          strategy='lazyOnload'
          data-website-id={process.env.NEXT_PUBLIC_ANALYTICS_ID}
          src={process.env.NEXT_PUBLIC_ANALYTICS_URL}
        />
      )}
      <UserContextProvider>
        <SWRConfig
          value={{ fetcher: (url) => fetch(url).then((res) => res.json()) }}>
          <Component {...pageProps} />
        </SWRConfig>
        <Toaster />
      </UserContextProvider>
    </div>
  );
}

export default MyApp;
