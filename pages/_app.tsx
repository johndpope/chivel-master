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
        description='Save Money. Save Time'
        openGraph={{
          url: 'https://unlimitednow.live',
          title: 'Save time and Money.',
          description:
            'Just let Chivel know about a YouTube channel, and we get you a blazing fast and SEO friendly landing page for your amazing YT channel',
          images: [
            {
              url: 'https://unlimitednow.live/ogimage.png',
              height: 600,
              width: 600,
              alt: 'Save time and money',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
          handle: '@lalitcodes',
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
