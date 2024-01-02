import { urlsList } from '@/data/urls'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(urlsList.baseUrl),
  alternates: {
    canonical: '/a-guide-to-yoga-teacher-training',
  },
  title: 'A Guide To Yoga Teacher Training',
  description: 'Discover the lifelong benefits beyond certification, from building community bonds to embracing diversity and cultivating a balanced mind-body connection.',
  keywords: 'Yoga Teaching, Bali Yoga, Joga Yoga',
  openGraph: {
    title: 'A Guide To Yoga Teacher Training',
    description: 'Discover the lifelong benefits beyond certification, from building community bonds to embracing diversity and cultivating a balanced mind-body connection.',
    type: 'website',
    images: '/assets/images/blog/guide-yoga.jpg'
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
