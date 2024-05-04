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
              The 200 hrs Yoga Teacher Training course by Joga Yoga Training is fully accredited with Yoga Alliance. You will be eligibled to register your complete hours of Continuing Education (CE) towards your RYT registration.
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
