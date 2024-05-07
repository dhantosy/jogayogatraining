'use client'

import Link from 'next/link'
import Image from 'next/image'
import Container from '@/app/_components/Container'
import { Section, Title, Heading, ImageWrapper, Content, Subtitle, Desc, Button } from './styles'
import ImageBanner from 'public/assets/images/gallery/training-9.jpg'

export default function HeroDetailPage() {
  return (
    <Section>
      <Heading>
        <Container>
          <Title>Become A Certified Yoga Teacher</Title>
          <Subtitle>100 and 200 Hours Yoga Teacher Training in Bali</Subtitle>
          <Desc>
            <div>Start the new year with a new journey in 21 days</div>
            <Link href='/register'>
              <Button>
                Apply Now
              </Button>
            </Link>
            <div>Upcoming YTT Dates:</div>
            <div>6 - 27 May, 2024</div>
            <div>1 - 22 July, 2024</div>
            <div>5 - 26 August, 2024</div>
            <div>2 - 23 September, 2024</div>
            <div>1 - 22 October, 2024</div>
            <div>4 - 25 November, 2024</div>
          </Desc>
        </Container>
      </Heading>
      <Content>
        <ImageWrapper>
          <Image
            src={ImageBanner.src}
            placeholder='blur'
            blurDataURL={ImageBanner.blurDataURL}
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
