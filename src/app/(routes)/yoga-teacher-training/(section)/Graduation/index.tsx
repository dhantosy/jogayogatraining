'use client'

import Image from 'next/image'
import Container from '@/app/_components/Container'
import { Heading, Section, Subtitle, Title, ImageWrapper, Photos } from './styles'

export default function Graduation() {
  return (
    <Container>
      <Section>
        <Heading>
          <Title>Certified Yoga Teacher</Title>
          <Subtitle>Upon completion of the 200 Hours Yoga Teacher Training, you will leave as an empowered, knowledgeable, and confident yoga teacher who can lead inspirational yoga classes for all levels.</Subtitle>
          <Subtitle>You will be able to understand & teach Creative Vinyasa Flow Sequence (all level), Hatha Vinyasa Flow Sequence, Basic Ashtanga Vinyasa, Understanding the principles of Yin/Restorative Yoga, Yoga Nidra and Meditation.</Subtitle>
          <Photos>
            <ImageWrapper className='photo'>
              <Image
                src='/assets/images/gallery/training-6.jpg'
                alt=''
                sizes={`100vw, 33vw`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </ImageWrapper>
            <ImageWrapper className='photo'>
              <Image
                src='/assets/images/gallery/training-13.jpg'
                alt=''
                sizes={`100vw, 33vw`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </ImageWrapper>
            <ImageWrapper className='photo'>
              <Image
                src='/assets/images/course-1.jpg'
                alt=''
                sizes={`100vw, 33vw`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </ImageWrapper>
          </Photos>
        </Heading>
      </Section>
    </Container>
  )
}
