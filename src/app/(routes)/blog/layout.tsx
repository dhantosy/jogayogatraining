import TrainingsCallToAction from '@/app/_components/TrainingsCallToAction'
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
      <TrainingsCallToAction
        title='Explore Our Yoga Teacher Training'
        description={`Our training focuses on deepening one's understanding of yoga philosophy, asanas (postures), pranayama (breathing techniques), meditation, and teaching methodologies. It aims to empower aspiring yoga teachers to guide others on their journey towards physical, mental, and spiritual well-being.`}
        photo='/assets/images/gallery/training-2.jpg'
      />
    </>
  )
}
