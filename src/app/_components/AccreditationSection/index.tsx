'use client'

import Image from 'next/image'
import Container from '@/app/_components/Container'
import { Section, Title, Subtitle, Heading, ImageWrapper, Content, More, ContentSub, Logos } from './styles'
import ImageCourse from 'public/assets/images/course-3.jpg';

export default function AccreditationSection() {
  return (
    <Section>
      <Container>
        <Heading>
          <Title>Yoga Alliance Accreditation</Title>
        </Heading>
        <Content>
          <ImageWrapper>
            <Image
              src={ImageCourse.src}
              placeholder='blur'
              blurDataURL={ImageCourse.blurDataURL}
              alt='YTT'
              sizes={`100vw, 33vw`}
              width='600'
              height='441'
            />
          </ImageWrapper>
          <ContentSub>
            <Subtitle>
              Our Joga Yoga Teacher Training courses are fully accredited with Yoga Alliance. All graduate students will receive the international certificate upon competition of the course and will be eligible to teach worldwide.
            </Subtitle>
            <Logos>
              <div>
                <Image
                  src='/assets/images/logo-rys-black.png'
                  alt=''
                  sizes={`100vw, 33vw`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className='image mobile'
                  priority
                />
              </div>
              <div>
                <Image
                  src='/assets/images/rys-300-logo.png'
                  alt=''
                  sizes={`100vw, 33vw`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className='image mobile'
                  priority
                />
              </div>
              <div>
                <Image
                  src='/assets/images/yacep-logo.png'
                  alt=''
                  sizes={`100vw, 33vw`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className='image mobile'
                  priority
                />
              </div>
            </Logos>
          </ContentSub>
        </Content>
      </Container>
    </Section>
  )
}
