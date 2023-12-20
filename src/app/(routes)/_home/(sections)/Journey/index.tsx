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
              <ContentItem>Immerse yourself in the serene beauty of a tropical island as you embark on a transformative yoga journey with Joga Yoga. Surrender and reconnect with your body, mind and soul with our community dedicated to the ancient practise of yoga. With certified expert instructors guiding you on this transformative experience, you`ll find inner peace and joy again. It seems that everyone is trying to sell something these days but we’re here, a health conscious yoga community dedicated to helping you grow, heal, feel valued and get in touch with yourself again.</ContentItem>
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
