import type { Metadata } from 'next'

export const metadata: Metadata = {
  // metadataBase: new URL(''),
  alternates: {
    canonical: '',
  },
  title: 'Joga Yoga Trainings Teachers',
  description: '',
  keywords: '',
  openGraph: {
    title: 'Joga Yoga Trainings Teachers',
    description: '',
    type: 'website',
    images: ''
  }
}

export default function TeachersLayout({
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
