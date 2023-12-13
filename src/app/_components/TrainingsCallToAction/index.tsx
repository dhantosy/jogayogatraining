'use client'

import Link from 'next/link'
import Image from 'next/image'
import Container from '@/app/_components/Container'
import { Section, Title, Subtitle, Heading, ImageWrapper, Content, ContentSub, More } from './styles'

type Props = {
  title: string;
  description: string;
  photo: string;
};

export default function TrainingsCallToAction({ title, description, photo}:Props) {
  return (
    <Section>
      <Container>
        <Heading>
          <Title>{title}</Title>
        </Heading>
        <Content>
          <ContentSub>
            <Subtitle>{description}</Subtitle>
            <div className='link'>
              <Link href='/yoga-teacher-training'>
                <More>
                  <div>See Our Trainings</div>
                </More>
              </Link>
            </div>
          </ContentSub>
          <ImageWrapper className='image'>
            <Image
              src={photo}
              alt='Joga Yoga Training'
              sizes={`100vw, 33vw`}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </ImageWrapper>
        </Content>
      </Container>
    </Section>
  )
}
