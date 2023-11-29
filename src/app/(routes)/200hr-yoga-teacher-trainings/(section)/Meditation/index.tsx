'use client'

import Image from 'next/image'
import Container from '@/app/_components/Container'
import { ContentHeading, ContentItem, ImageWrapper, Gallery } from './styles'

export default function Meditation() {
  return (
    <Container>
      <div id='yoga-journey' />
      <Gallery>
        <div className='flex'>
          <div className='text'>
            <ContentHeading>Activities & Meditation</ContentHeading>
            <ContentItem>
              <div>Wake up and stroll over to the yoga shala where our monk Dada will guide you through morning meditation followed by a morning Vinyasa or Hatha yoga class, it`s the perfect way to start the day.</div>
              <div>After a delicious vegan/vegetarian buffet breakfast we hold a daily in-depth lecture based on yoga philosophy or yoga anatomy & physiology. After lunch work on teaching skills, asanas, strength and flexibility, mantras, ayurveda medicine and adjustments.</div>
              <div>At night we light the candles and practise a yin yoga class, helping you feel reconnected and relaxed before a peaceful nights sleep.</div>
            </ContentItem>
          </div>
          <ImageWrapper className='bottom'>
            <Image
              src='/assets/images/gallery/gallery-1.jpg'
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
