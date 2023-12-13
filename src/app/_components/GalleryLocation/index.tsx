'use client'

import Image from 'next/image'
import Container from '@/app/_components/Container'
import { Section, Title, Subtitle, Heading, Content, ImageWrapper } from './styles'

export default function Benefits() {
  return (
    <Container>
      <Section>
        <Heading>
          <Title>Tranquil Place For Your Training</Title>
          <Subtitle>5-minute walk from the beach and 2-minute walk from beautiful cafes.</Subtitle>
        </Heading>
        <Content>
          <ImageWrapper>
            <Image
              src='/assets/images/gallery/location-1.jpg'
              alt='YTT'
              sizes={`100vw, 33vw`}
              fill
              style={{ objectFit: 'cover' }}
              className='image'
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src='/assets/images/gallery/location-2.jpg'
              alt='YTT'
              sizes={`100vw, 33vw`}
              fill
              style={{ objectFit: 'cover' }}
              className='image'
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src='/assets/images/gallery/location-3.jpg'
              alt='YTT'
              sizes={`100vw, 33vw`}
              fill
              style={{ objectFit: 'cover' }}
              className='image'
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src='/assets/images/gallery/location-4.jpg'
              alt='YTT'
              sizes={`100vw, 33vw`}
              fill
              style={{ objectFit: 'cover' }}
              className='image'
            />
          </ImageWrapper>
        </Content>
      </Section>
    </Container>
  )
}
