import type { Metadata } from 'next'

export const metadata: Metadata = {
  // metadataBase: new URL(''),
  alternates: {
    canonical: '',
  },
  title: 'Yoga Teacher Trainings',
  description: '',
  keywords: '',
  openGraph: {
    title: 'Yoga Teacher Trainings',
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
