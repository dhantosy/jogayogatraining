'use client'

import Image from 'next/image'
import Container from '@/app/_components/Container'
import { Section, Title, Subtitle, Heading, ImageWrapper, Content, ContentSub } from './styles'

export default function Community() {
  return (
    <Section>
      <Container>
        <Heading>
          <Title>Be Part of Our Community</Title>
        </Heading>
        <Content>
          <ImageWrapper>
            <Image
              src='/assets/images/gallery/about-7.jpg'
              alt='YTT'
              sizes={`100vw, 33vw`}
              width='600'
              height='441'
            />
          </ImageWrapper>
          <ContentSub>
            <Subtitle>We are a welcoming and supportive space that aims to make yoga accessible to individuals of all backgrounds, abilities, and identities. This community is built on the principles of inclusivity, diversity, and respect, ensuring that everyone feels valued and empowered to participate in the practice of yoga.</Subtitle>
          </ContentSub>
        </Content>
      </Container>
    </Section>
  )
}
