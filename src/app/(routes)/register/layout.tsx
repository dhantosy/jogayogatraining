import TrainingsCallToAction from '@/app/_components/TrainingsCallToAction'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  // metadataBase: new URL(''),
  alternates: {
    canonical: '',
  },
  title: 'Joga Yoga Trainings Registration Form',
  description: '',
  keywords: '',
  openGraph: {
    title: 'Joga Yoga Trainings Registration Form',
    description: '',
    type: 'website',
    images: ''
  }
}

export default function RegisterLayout({
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
