'use client'

import Image from 'next/image'
import Container from '@/app/_components/Container'
import { Heading, Section, Subtitle, Title, ImageWrapper, Photos } from './styles'

export default function Graduation() {
  return (
    <Container>
      <Section>
        <Heading>
          <Title>Who would benefit from this?</Title>
          <Subtitle>People looking for a deep dive into self development, self healing, want to explore their spirituality, want to level up their lives, want to deepen relationship with themselves, and want to improves physical practice.</Subtitle>
          <Subtitle><strong>We Are Not Just A School, We Also A Community Of Friends And Family Since 2017</strong></Subtitle>
          <Photos>
            <ImageWrapper className='photo'>
              <Image
                src='/assets/images/gallery/about-5.jpg'
                alt=''
                sizes={`100vw, 33vw`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </ImageWrapper>
            <ImageWrapper className='photo'>
              <Image
                src='/assets/images/gallery/training-8.jpg'
                alt=''
                sizes={`100vw, 33vw`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </ImageWrapper>
            <ImageWrapper className='photo'>
              <Image
                src='/assets/images/course-1.jpg'
                alt=''
                sizes={`100vw, 33vw`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </ImageWrapper>
          </Photos>
        </Heading>
      </Section>
    </Container>
  )
}
