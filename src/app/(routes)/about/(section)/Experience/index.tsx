'use client'

import Image from 'next/image'
import Container from '@/app/_components/Container'
import { ContentHeading, ContentItem, ImageWrapper, Gallery } from './styles'

export default function Experience() {
  return (
    <Container>
      <div id='yoga-journey' />
      <Gallery>
        <div className='flex'>
          <div className='text'>
            <ContentHeading>Experience Bali with Us</ContentHeading>
            <ContentItem>
              <div>Bali is renowned for its rich cultural heritage, and we believe in providing opportunities for you to connect with the local community. From participating in traditional ceremonies and rituals to learning traditional arts and crafts, you will have the chance to immerse yourself in the vibrant Balinese culture and gain a deeper appreciation for its traditions.</div>
              <div>We are dedicated to providing you with an unforgettable experience in this enchanting island paradise.</div>
            </ContentItem>
          </div>
          <ImageWrapper className='bottom'>
            <Image
              src='/assets/images/gallery/gallery-3.jpg'
              alt='yoga teacher training activity'
              sizes={`100vw, 33vw`}
              fill
              style={{ objectFit: 'cover' }}
              className='image'
            />
          </ImageWrapper>
        </div>
      </Gallery>
    </Container>
  )
}
