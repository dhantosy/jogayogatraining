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
          <Title>MIND - BODY - SOUL</Title>
          <Subtitle>Holistic approach for your wellness in 5 days</Subtitle>
          <Desc>
            <div>Are You Ready for an Unforgettable Adventure? Special Easter Retreat with Joga Yoga in Bali</div>
            <Link href='/register'>
              <Button>
                Apply Now
              </Button>
            </Link>
            <div>4 spots left available on the next retreat</div>
            <div>March 28th - April 1st, 2024</div>
          </Desc>
        </Container>
      </Heading>
      <Content>
        <ImageWrapper>
          <Image
            src='/assets/images/yoga-retreat.jpg'
            alt='Joga Yoga Training - Yoga Retreat'
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
