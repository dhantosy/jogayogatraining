import type { Metadata } from 'next'

export const metadata: Metadata = {
  // metadataBase: new URL(''),
  alternates: {
    canonical: '',
  },
  title: 'Yoga Teacher Training',
  description: '',
  keywords: '',
  openGraph: {
    title: 'Yoga Teacher Training',
    description: '',
    type: 'website',
    images: ''
  }
}

export default function YogaTeacherTrainingLayout({
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
