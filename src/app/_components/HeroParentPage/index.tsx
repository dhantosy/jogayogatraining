'use client'

import Image from 'next/image'
import Container from '@/app/_components/Container'
import { Section, Title, Subtitle, Heading, ImageWrapper, Content, ContentSub } from './styles'

type Props = {
  title: string;
  subtitle: string;
  backgroundImage: string;
};

export default function HeroParentPage({ title, subtitle, backgroundImage }: Props) {
  return (
    <Section>
      <Container>
        <Heading>
          <Title>{title}</Title>
        </Heading>
        <Content>
          <ContentSub>
            <Subtitle>{subtitle}</Subtitle>
          </ContentSub>
          <ImageWrapper>
            <Image
              src={backgroundImage}
              alt={title}
              sizes={`100vw, 33vw`}
              width='600'
              height='441'
              priority
            />
          </ImageWrapper>
        </Content>
      </Container>
    </Section>
  )
}
