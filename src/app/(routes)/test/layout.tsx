import { urlsList } from '@/data/urls'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(urlsList.baseUrl),
  alternates: {
    canonical: '/yoga-retreat',
  },
  title: 'Yoga Retreat with Joga Yoga Training',
  description: 'Joga Yoga offers Yoga Teacher Trainings and a beautiful yoga retreats in Bali. We have experienced teachers and healers in a stunning locations, join us!',
  keywords: 'Joga Yoga, Yoga Teacher Training, YTT, Yoga Teacher Training in Bali, Yoga Teacher Training Canggu, YTT Bali, Yoga Training Bali',
  openGraph: {
    title: 'Yoga Retreat with Joga Yoga Training',
    description: 'Joga Yoga offers Yoga Teacher Trainings and a beautiful yoga retreats in Bali. We have experienced teachers and healers in a stunning locations, join us!',
    type: 'website',
    images: '/assets/images/banner-photo.jpg'
  }
}

export default function YogaRetreatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      { children }
    </>
  )
}
