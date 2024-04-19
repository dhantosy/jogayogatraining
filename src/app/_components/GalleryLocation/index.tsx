'use client'

import Image from 'next/image'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Container from '@/app/_components/Container'
import { Section, Title, Subtitle, Heading, Content, ImageWrapper } from './styles'
import ImageLocationOne from 'public/assets/images/gallery/location-1.jpg';
import ImageLocationTwo from 'public/assets/images/gallery/location-2.jpg';
import ImageLocationThree from 'public/assets/images/gallery/location-3.jpg';
import ImageLocationFour from 'public/assets/images/gallery/location-4.jpg';
import ImageLocationFive from 'public/assets/images/gallery/location-5.jpg';
import ImageLocationSix from 'public/assets/images/gallery/location-6.jpg';
import ImageLocationSeven from 'public/assets/images/gallery/location-7.jpg';
import ImageLocationEight from 'public/assets/images/gallery/location-8.jpg';

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
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <Content>
              <ImageWrapper>
                <Image
                  src={ImageLocationOne.src}
                  placeholder='blur'
                  blurDataURL={ImageLocationOne.blurDataURL}
                  alt='Joga Yoga Teachers Training Location'
                  sizes={`100vw, 33vw`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className='image'
                />
              </ImageWrapper>
              <ImageWrapper>
                <Image
                  src={ImageLocationTwo.src}
                  placeholder='blur'
                  blurDataURL={ImageLocationTwo.blurDataURL}
                  alt='Joga Yoga Teachers Training Location'
                  sizes={`100vw, 33vw`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className='image'
                />
              </ImageWrapper>
              <ImageWrapper>
                <Image
                  src={ImageLocationThree.src}
                  placeholder='blur'
                  blurDataURL={ImageLocationThree.blurDataURL}
                  alt='Joga Yoga Teachers Training Location'
                  sizes={`100vw, 33vw`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className='image'
                />
              </ImageWrapper>
              <ImageWrapper>
                <Image
                  src={ImageLocationFour.src}
                  placeholder='blur'
                  blurDataURL={ImageLocationFour.blurDataURL}
                  alt='Joga Yoga Teachers Training Location'
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
                  src={ImageLocationFive.src}
                  placeholder='blur'
                  blurDataURL={ImageLocationFive.blurDataURL}
                  alt='Joga Yoga Teachers Training Location'
                  sizes={`100vw, 33vw`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className='image'
                />
              </ImageWrapper>
              <ImageWrapper>
                <Image
                  src={ImageLocationSix.src}
                  placeholder='blur'
                  blurDataURL={ImageLocationSix.blurDataURL}
                  alt='Joga Yoga Teachers Training Location'
                  sizes={`100vw, 33vw`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className='image'
                />
              </ImageWrapper>
              <ImageWrapper>
                <Image
                  src={ImageLocationSeven.src}
                  placeholder='blur'
                  blurDataURL={ImageLocationSeven.blurDataURL}
                  alt='Joga Yoga Teachers Training Location'
                  sizes={`100vw, 33vw`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className='image'
                />
              </ImageWrapper>
              <ImageWrapper>
                <Image
                  src={ImageLocationEight.src}
                  placeholder='blur'
                  blurDataURL={ImageLocationEight.blurDataURL}
                  alt='Joga Yoga Teachers Training Location'
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
