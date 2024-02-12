'use client'

import Image from 'next/image'
import Container from '@/app/_components/Container'
import { Heading, ImageWrapper, Section, Subtitle, Title } from './styles'

export default function Schedule() {
  return (
    <Section>
      <Container>
        <Heading>
          <Title>Learn The Art Of Self-Regulation</Title>
          <Subtitle>This journey will give you the ability to reflect on yourself and expand your consciousness through the unique method of mindfulness. You will get to know yourself and the world through a wider perspective and find your true self.</Subtitle>
        </Heading>
        <div>
          <ImageWrapper>
            <Image
              src='/assets/images/self-regulation.jpg'
              alt='Self Regulation'
              sizes={`100vw, 33vw`}
              fill
              style={{ objectFit: 'cover' }}
              className='image'
            />
          </ImageWrapper>
        </div>
      </Container>
    </Section>
  )
}
