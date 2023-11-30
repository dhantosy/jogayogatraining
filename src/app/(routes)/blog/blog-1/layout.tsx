import type { Metadata } from 'next'

export const metadata: Metadata = {
  // metadataBase: new URL(''),
  alternates: {
    canonical: '',
  },
  title: 'Joga Yoga Trainings Blog',
  description: '',
  keywords: '',
  openGraph: {
    title: 'Joga Yoga Trainings Blog',
    description: '',
    type: 'website',
    images: ''
  }
}

export default function BlogLayout({
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
