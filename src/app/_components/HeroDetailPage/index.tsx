'use client'

import Image from 'next/image'
import { StaticImageData } from 'next/image'
import Container from '@/app/_components/Container'
import { Section, Title, Heading, ImageWrapper, Content } from './styles'

type Props = {
  title: string;
  backgroundImage: StaticImageData;
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
            src={backgroundImage.src}
            alt={title}
            placeholder='blur'
            blurDataURL={backgroundImage.blurDataURL}
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
