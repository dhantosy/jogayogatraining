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
import { urlsList } from '@/data/urls';

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
  metadataBase: new URL(urlsList.baseUrl),
  alternates: {
    canonical: '/',
  },
  robots: 'index, follow',
  title: 'Joga Yoga Training',
  description: 'Joga Yoga offers Yoga Teacher Trainings and a beautiful yoga retreats in Bali. We have experienced teachers and healers in a stunning locations, join us!',
  keywords: 'Joga Yoga, Yoga Teacher Training, YTT, Yoga Teacher Training in Bali, Yoga Teacher Training Canggu, YTT Bali, Yoga Training Bali',
  openGraph: {
    title: 'Joga Yoga Training',
    description: 'Joga Yoga offers Yoga Teacher Trainings and a beautiful yoga retreats in Bali. We have experienced teachers and healers in a stunning locations, join us!',
    type: 'website',
    images: '/assets/images/banner-photo.jpg'
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
        <link rel='apple-touch-icon' sizes='180x180' href='/assets/favicons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/assets/favicons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/assets/favicons/favicon-16x16.png' />
        <link rel='manifest' href='/assets/favicons/site.webmanifest' />
        <link rel='mask-icon' href='/assets/favicons/safari-pinned-tab.svg' color='#fec5cd' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='theme-color' content='#ffffff' />
        <meta name="google-site-verification" content="NiuqzthYGioELx2oOFPHEA65gIMercuMX6Q3mSm13ek" />

        <Script src='https://www.googletagmanager.com/gtag/js?id=G-LH4FWQ4D99' strategy='afterInteractive' />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-LH4FWQ4D99');
        `}
        </Script>
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
