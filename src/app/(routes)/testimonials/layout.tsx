import type { Metadata } from 'next'

export const metadata: Metadata = {
  // metadataBase: new URL(''),
  alternates: {
    canonical: '',
  },
  title: 'Joga Yoga Trainings Testimonials',
  description: '',
  keywords: '',
  openGraph: {
    title: 'Joga Yoga Trainings Testimonials',
    description: '',
    type: 'website',
    images: ''
  }
}

export default function TestimonialsLayout({
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
