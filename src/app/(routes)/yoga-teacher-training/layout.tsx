import { urlsList } from '@/data/urls'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(urlsList.baseUrl),
  alternates: {
    canonical: '/yoga-teacher-training',
  },
  title: '300 Hour Yoga Teacher Training in Bali | Joga Yoga',
  description: 'Advance your practice with our 300 hour yoga teacher training in Bali. Achieve certification and immerse in Bali`s serene beauty. Join Joga Yoga Training today!',
  keywords: 'Joga Yoga, Yoga Teacher Training, YTT, Yoga Teacher Training in Bali, Yoga Teacher Training Canggu, YTT Bali, Yoga Training Bali',
  openGraph: {
    title: '300 Hour Yoga Teacher Training in Bali | Joga Yoga',
    description: 'Advance your practice with our 300 hour yoga teacher training in Bali. Achieve certification and immerse in Bali`s serene beauty. Join Joga Yoga Training today!',
    type: 'website',
    images: '/assets/images/banner-photo.jpg'
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
