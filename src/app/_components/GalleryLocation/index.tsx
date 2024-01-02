'use client'

import Image from 'next/image'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Container from '@/app/_components/Container'
import { Section, Title, Subtitle, Heading, Content, ImageWrapper } from './styles'

export default function GalleryLocation() {
  return (
    <Container>
      <Section>
        <Heading>
          <Title>Tranquil Place For Your Training</Title>
          <Subtitle>5-minute walk from the beach and 2-minute walk from beautiful cafes.</Subtitle>
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
                  src='/assets/images/gallery/location-1.jpg'
                  alt='YTT'
                  sizes={`100vw, 33vw`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className='image'
                />
              </ImageWrapper>
              <ImageWrapper>
                <Image
                  src='/assets/images/gallery/location-2.jpg'
                  alt='YTT'
                  sizes={`100vw, 33vw`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className='image'
                />
              </ImageWrapper>
              <ImageWrapper>
                <Image
                  src='/assets/images/gallery/location-3.jpg'
                  alt='YTT'
                  sizes={`100vw, 33vw`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className='image'
                />
              </ImageWrapper>
              <ImageWrapper>
                <Image
                  src='/assets/images/gallery/location-4.jpg'
                  alt='YTT'
                  sizes={`100vw, 33vw`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className='image'
                />
              </ImageWrapper>
            </Content>
          </SwiperSlide>
          <SwiperSlide>
            <Content>
              <ImageWrapper>
                <Image
                  src='/assets/images/gallery/location-5.jpg'
                  alt='YTT'
                  sizes={`100vw, 33vw`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className='image'
                />
              </ImageWrapper>
              <ImageWrapper>
                <Image
                  src='/assets/images/gallery/location-6.jpg'
                  alt='YTT'
                  sizes={`100vw, 33vw`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className='image'
                />
              </ImageWrapper>
              <ImageWrapper>
                <Image
                  src='/assets/images/gallery/location-7.jpg'
                  alt='YTT'
                  sizes={`100vw, 33vw`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className='image'
                />
              </ImageWrapper>
              <ImageWrapper>
                <Image
                  src='/assets/images/gallery/location-8.jpg'
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
