'use client'

import Image from 'next/image'
import Container from '@/app/_components/Container'
import { Heading, Section, Subtitle, Title, ImageWrapper, Photos, Logos } from './styles'

export default function Intro() {
  return (
    <Container>
      <Section>
        <Heading>
          <Title>Joga Yoga Training</Title>
          <Subtitle>Joga Yoga Training is a Yoga School that’s been established in Bali for more than 9 years. We were one of of the first Yoga schools that decided to seek out some of the most experienced teachers to guide students on this very special journey. We are very focused on the depth of yoga and what it can do for your physical and mental wellbeing. It is fundamentally a spiritual practice so the quality and in depth study of yoga is highly important to us. This is why a large part of our YTT is focused on meditation and breathwork.</Subtitle>
          <Subtitle>Some say the practice of yoga has even diluted in our culture but we strive to keep this ancient practice alive. Yoga history and philosophy, study of yoga anatomy, Ayurveda the ancient yoga medicine, physical asana and sequencing, in depth pranayama breath work and meditation, yoga diet and health and the fundamental pillars on our yoga teacher training.</Subtitle>
          <Logos>
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
            <ImageWrapper>
              <Image
                src='/assets/images/rys-300-logo.png'
                alt=''
                sizes={`100vw, 33vw`}
                fill
                style={{ objectFit: 'cover' }}
                className='image'
              />
            </ImageWrapper>
            <ImageWrapper>
              <Image
                src='/assets/images/yacep-logo.png'
                alt=''
                sizes={`100vw, 33vw`}
                fill
                style={{ objectFit: 'cover' }}
                className='image'
              />
            </ImageWrapper>
          </Logos>
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
