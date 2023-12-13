'use client'

import Link from 'next/link'
import Image from 'next/image'
import Container from '@/app/_components/Container'
import { Section, ContentHeading, ContentItem, ImageWrapper, Gallery, More } from './styles'

export default function Journey() {
  return (
    <Section>
      <Container>
        <Gallery>
          <div className='flex'>
            <div className='text'>
              <ContentHeading className='subheading'>Embark on a Transformative Yoga Journey</ContentHeading>
              <ContentItem>Immerse yourself in the serene beauty of a tropical island as you embark on a transformative yoga journey. Allowing you to reconnect with your body, mind, and soul amidst breathtaking natural surroundings. With expert instructors guiding you through rejuvenating yoga trainings, you`ll find inner peace and balance while surrounded by the gentle caress of warm island breezes.</ContentItem>
              <Link href='/yoga-teacher-training'>
                <More>
                  <div>See Our Trainings</div>
                </More>
              </Link>
            </div>
            <ImageWrapper className='bottom'>
              <Image
                src='/assets/images/gallery/gallery-7.jpg'
                alt='YTT'
                sizes={`100vw, 33vw`}
                fill
                style={{ objectFit: 'cover' }}
                className='image'
              />
            </ImageWrapper>
          </div>
        </Gallery>
      </Container>
    </Section>
  )
}
