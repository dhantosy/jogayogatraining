'use client'

import Image from 'next/image'
import Container from '@/app/_components/Container'
import { Section, Title, Heading, ImageWrapper, Content } from './styles'

type Props = {
  title: string;
  backgroundImage: string;
};

export default function HeroDetailPage({ title, backgroundImage }: Props) {
  return (
    <Section>
        <Heading>
          <Container>
            <Title>{title}</Title>
          </Container>
        </Heading>
        <Content>
          <ImageWrapper>
            <Image
              src={backgroundImage}
              alt={title}
              sizes={`100vw, 33vw`}
              fill
              style={{ objectFit: 'cover' }}
            />
          </ImageWrapper>
        </Content>
    </Section>
  )
}
