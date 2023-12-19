import { urlsList } from '@/data/urls'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(urlsList.baseUrl),
  alternates: {
    canonical: '/payment-success',
  },
  title: 'Payment Success Joga Yoga Trainings',
  description: 'Joga Yoga offers Yoga Teacher Trainings and a beautiful yoga retreats in Bali. We have experienced teachers and healers in a stunning locations, join us!',
  keywords: 'Joga Yoga, Yoga Teacher Training, YTT, Yoga Teacher Training in Bali, Yoga Teacher Training Canggu, YTT Bali, Yoga Training Bali',
  openGraph: {
    title: 'Payment Success Joga Yoga Training',
    description: 'Joga Yoga offers Yoga Teacher Trainings and a beautiful yoga retreats in Bali. We have experienced teachers and healers in a stunning locations, join us!',
    type: 'website',
    images: '/assets/images/banner-photo.jpg'
  }
}

export default function PaymentSuccessLayout({
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
