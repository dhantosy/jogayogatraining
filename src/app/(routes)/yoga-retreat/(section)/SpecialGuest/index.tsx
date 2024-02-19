'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Container from '@/app/_components/Container'
import { Section, Title, Subtitle, Heading, ImageWrapper, Content, ContentSub, More } from './styles'

export default function SpecialGuest() {
  return (
    <Section>
      <Container>
        <Heading>
          <Title>Dokota Mays and Joga Yoga present Bio-Hacking Holistic Yoga Retreat</Title>
        </Heading>
        <Content>
          <ContentSub>
            <Subtitle><strong>Dakota Mays</strong> - yoga instructor, movement specialist, handstand coach, and retreat facilitator. Join Dakota and Joseph on this epic holistic yoga retreat! Limited places available.</Subtitle>
            <div className='link'>
              <a href='https://www.tiktok.com/@maysyoga_' target='_blank'>
                <More>
                  <div>Check Dakota Mays` TikTok</div>
                </More>
              </a>
            </div>
          </ContentSub>
          <Swiper
            loop
            navigation={true}
            modules={[Navigation]}
            className='image'
          >
            <SwiperSlide>
              <ImageWrapper>
                <Image
                  src='/assets/images/retreat/dakota-1.jpg'
                  alt='Joga Yoga Training'
                  sizes={`100vw, 33vw`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </ImageWrapper>
            </SwiperSlide>
            <SwiperSlide>
              <ImageWrapper>
                <Image
                  src='/assets/images/retreat/dakota-2.jpg'
                  alt='Joga Yoga Training'
                  sizes={`100vw, 33vw`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </ImageWrapper>
            </SwiperSlide>
            <SwiperSlide>
              <ImageWrapper>
                <Image
                  src='/assets/images/retreat/dakota-3.jpg'
                  alt='Joga Yoga Training'
                  sizes={`100vw, 33vw`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </ImageWrapper>
            </SwiperSlide>
            <SwiperSlide>
              <ImageWrapper>
                <Image
                  src='/assets/images/retreat/dakota-4.jpg'
                  alt='Joga Yoga Training'
                  sizes={`100vw, 33vw`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </ImageWrapper>
            </SwiperSlide>
          </Swiper>
        </Content>
      </Container>
    </Section>
  )
}
