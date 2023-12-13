'use client'

import Image from 'next/image'
import Container from '@/app/_components/Container'
import { Section, Title, Subtitle, Heading, ImageWrapper, Content, More, ContentSub } from './styles'

export default function About() {
  return (
    <Section>
      <Container>
        <Heading>
          <Title>Become a Certified Yoga Teacher in Bali, the Island of the Gods</Title>
        </Heading>
        <Content>
          <ImageWrapper>
            <Image
              src='/assets/images/gallery/training-5.jpg'
              alt='YTT'
              sizes={`100vw, 33vw`}
              width='600'
              height='441'
            />
          </ImageWrapper>
          <ContentSub>
            <Subtitle>Early bird price is available <strong>starting from USD 1999</strong>, or <strong>IDR 17jt</strong> for local Indonesians which includes yoga teaching resources, daily yoga and meditation, healthy daily breakfast, the YTT teachers manual, airport pick up, unlimited purified drinking water, weekend excursions and much more. We do offer accommodation packages too.</Subtitle>
            <a href='#register'>
              <More>
                <div>Check Price</div>
              </More>
            </a>
          </ContentSub>
        </Content>
      </Container>
    </Section>
  )
}
