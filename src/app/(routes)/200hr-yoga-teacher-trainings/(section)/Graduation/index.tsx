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
          <Subtitle>After completing the course and passing the exam, you will receive Yoga Alliance International accreditation.</Subtitle>
          <ImageWrapper>
            <Image
              src='/assets/images/logo-rys-black.png'
              alt=''
              sizes={`100vw, 33vw`}
              fill
              style={{ objectFit: 'cover' }}
              className='image'
            />
          </ImageWrapper>
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
                src='/assets/images/gallery/training-3.jpg'
                alt=''
                sizes={`100vw, 33vw`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </ImageWrapper>
            <ImageWrapper className='photo'>
              <Image
                src='/assets/images/gallery/training-11.jpg'
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
