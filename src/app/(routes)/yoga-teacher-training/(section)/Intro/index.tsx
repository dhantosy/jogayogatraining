'use client'

import Link from 'next/link'
import Image from 'next/image'
import Container from '@/app/_components/Container'
import { Section, Title, Heading, ImageWrapper, Content, Subtitle, Desc, Button } from './styles'

export default function HeroDetailPage() {
  return (
    <Section>
      <Heading>
        <Container>
          <Title>Become A Certified Yoga Teacher</Title>
          <Subtitle>200 Hours Yoga Teacher Training in Bali</Subtitle>
          <Desc>
            <div>2 spots left available on the next training</div>
            <div>Jan 8th - Jan 29th, 2024</div>
            <Link href='/register'>
              <Button>
                Apply Now
              </Button>
            </Link>
          </Desc>
        </Container>
      </Heading>
      <Content>
        <ImageWrapper>
          <Image
            src='/assets/images/gallery/training-9.jpg'
            alt='Joga Yoga Teacher Training'
            sizes={`100vw, 33vw`}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </ImageWrapper>
      </Content>
    </Section>
  )
}
