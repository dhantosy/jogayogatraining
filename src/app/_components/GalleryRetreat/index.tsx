'use client'

import Image from 'next/image'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Container from '@/app/_components/Container'
import { Section, Title, Subtitle, Heading, Content, ImageWrapper } from './styles'

export default function GalleryRetreat() {
  return (
    <Container>
      <Section>
        <Heading>
          <Title>Tranquil Place For Your Self Healing Journey</Title>
          <Subtitle>5-minute Walk From The Beach And 2-minute Walk From Beautiful Cafes.</Subtitle>
        </Heading>
        <Swiper
          loop
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <Content>
              <ImageWrapper>
                <Image
                  src='/assets/images/location-1.jpg'
                  alt='YTT'
                  sizes={`100vw, 33vw`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className='image'
                />
              </ImageWrapper>
              <ImageWrapper>
                <Image
                  src='/assets/images/location-2.jpg'
                  alt='YTT'
                  sizes={`100vw, 33vw`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className='image'
                />
              </ImageWrapper>
              <ImageWrapper>
                <Image
                  src='/assets/images/gallery/excursion-4.jpg'
                  alt='YTT'
                  sizes={`100vw, 33vw`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className='image'
                />
              </ImageWrapper>
              <ImageWrapper>
                <Image
                  src='/assets/images/gallery/excursion-5.jpg'
                  alt='YTT'
                  sizes={`100vw, 33vw`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className='image'
                />
              </ImageWrapper>
            </Content>
          </SwiperSlide>
        </Swiper>
      </Section>
    </Container>
  )
}
