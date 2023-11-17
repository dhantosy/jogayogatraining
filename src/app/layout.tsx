import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

import type { Metadata } from 'next'
import Script from 'next/script';
import NextTopLoader from 'nextjs-toploader'
import { DM_Sans, Poppins } from 'next/font/google'
import Footer from '@/app/_components/Footer'
import Header from '@/app/_components/Header'
import WhatsappWidget from '@/app//_components/WhatsappWidget'
import Providers from '@/providers/Providers'

const cinzel = DM_Sans({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'auto',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'auto',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.balistingraydiver.com'),
  alternates: {
    canonical: '/',
  },
  robots: 'index, follow',
  title: 'Joga Yoga',
  description: 'Dive Into the World of Underwater Exploration with Bali Stingray Divers, One of the Most Trusted Dive Center in Bali.',
  keywords: 'Dive Center, Bali Dive Center, Scuba Dive Bali, Nusa Penida Diving, Tulamben Diving, Amed Diving, Menjangan Diving, Scuba Diving, Stingray, Bali, Diving',
  openGraph: {
    title: 'Bali Stingray Divers',
    description: 'Dive Into the World of Underwater Exploration with Bali Stingray Divers, One of the Most Trusted Dive Center in Bali.',
    type: 'website',
    images: '/assets/images/banner-fb.jpg'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        {/* <link rel='apple-touch-icon' sizes='180x180' href='/assets/favicons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/assets/favicons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/assets/favicons/favicon-16x16.png' />
        <link rel='manifest' href='/assets/favicons/site.webmanifest' />
        <link rel='mask-icon' href='/assets/favicons/safari-pinned-tab.svg' color='#000000' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='google-site-verification' content='-JCDVwFQrX0nqoy21pWTjBf8QBCs1Mmqyaglp2_FzB8' /> */}

        {/* <Script src='https://www.googletagmanager.com/gtag/js?id=G-HN4K455H6E' strategy='afterInteractive' />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-HN4K455H6E');
        `}
        </Script> */}
      </head>
      <body className={`${cinzel.variable} ${poppins.variable}`} suppressHydrationWarning>
        <NextTopLoader
          color='#20C7CA'
          height={5}
        />
        <Providers>
          <Header />
          {children}
          <Footer />
          <WhatsappWidget />
        </Providers>
      </body>
    </html>
  )
}
