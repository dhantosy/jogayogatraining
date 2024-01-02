import { urlsList } from '@/data/urls'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(urlsList.baseUrl),
  alternates: {
    canonical: '/nurturing-souls-through-yoga-teaching',
  },
  title: 'Nurturing Souls Through Yoga Teaching',
  description: 'Learn to create an inclusive space where diversity is celebrated, and compassion guides your teaching.',
  keywords: 'Yoga Teaching, Bali Yoga, Joga Yoga',
  openGraph: {
    title: 'Nurturing Souls Through Yoga Teaching',
    description: 'Learn to create an inclusive space where diversity is celebrated, and compassion guides your teaching.',
    type: 'website',
    images: '/assets/images/blog/soul-yoga.jpg'
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
