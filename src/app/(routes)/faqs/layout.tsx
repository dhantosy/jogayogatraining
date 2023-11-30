import type { Metadata } from 'next'

export const metadata: Metadata = {
  // metadataBase: new URL(''),
  alternates: {
    canonical: '',
  },
  title: 'Joga Yoga FAQs',
  description: '',
  keywords: '',
  openGraph: {
    title: 'Joga Yoga FAQs',
    description: '',
    type: 'website',
    images: ''
  }
}

export default function FaqPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
