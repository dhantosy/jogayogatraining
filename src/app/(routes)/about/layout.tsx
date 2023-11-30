import type { Metadata } from 'next'

export const metadata: Metadata = {
  // metadataBase: new URL(''),
  alternates: {
    canonical: '',
  },
  title: 'About Joga Yoga Trainings',
  description: '',
  keywords: '',
  openGraph: {
    title: 'About Joga Yoga Trainings',
    description: '',
    type: 'website',
    images: ''
  }
}

export default function AboutLayout({
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
