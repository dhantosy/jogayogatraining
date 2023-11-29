'use client'

import Link from 'next/link'
import Image from 'next/image'
import Container from '@/app/_components/Container'
import { Section, Title, Subtitle, Heading, ImageWrapper, Content, ContentSub, More } from './styles'

export default function Courses() {
  return (
    <Section>
      <Container>
        <Heading>
          <Title>Intimate Yoga Teacher Training</Title>
        </Heading>
        <Content>
          <ContentSub>
            <Subtitle>{`Our training focuses on deepening one's understanding of yoga philosophy, asanas (postures), pranayama (breathing techniques), meditation, and teaching methodologies. It aims to empower aspiring yoga teachers to guide others on their journey towards physical, mental, and spiritual well-being.`}</Subtitle>
            <Link href='/200hr-yoga-teacher-trainings'>
              <More>
                <div>See Our Trainings</div>
              </More>
            </Link>
          </ContentSub>
          <ImageWrapper className='image'>
            <Image
              src='/assets/images/gallery/training-2.jpg'
              alt='Joga Yoga Training'
              sizes={`100vw, 33vw`}
              width='480'
              height='480'
              priority
            />
          </ImageWrapper>
        </Content>
      </Container>
    </Section>
  )
}
