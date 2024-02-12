'use client'

import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Container from '@/app/_components/Container'
import { Section, Title, Subtitle, Heading, Content, ContentHeading, ContentItem, ImageWrapper } from './styles'

export default function Benefits() {
  return (
    <Section>
      <Container>
        <Heading>
          <Title>Connecting Mind, Body & Soul</Title>
        </Heading>
        <Content>
          <ContentItem>
            <Swiper
              loop
              navigation={true}
              modules={[Navigation]}
            >
              <SwiperSlide>
                <ImageWrapper>
                  <Image
                    src='/assets/images/gallery/training-2.jpg'
                    alt='Retreat'
                    sizes={`100vw, 33vw`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className='image'
                  />
                </ImageWrapper>
              </SwiperSlide>
            </Swiper>
            <ContentHeading>
              <div>Mind</div>
            </ContentHeading>
            <div>Lectures from top educators on nutrition, fitness, yoga, biohacking, anatomy, physiology, philosophy. Learn The Art Of Self-Regulation.</div>
          </ContentItem>
          <ContentItem>
            <Swiper
              loop
              navigation={true}
              modules={[Navigation]}
            >
              <SwiperSlide>
                <ImageWrapper>
                  <Image
                    src='/assets/images/gallery/training-1.jpg'
                    alt='Retreat'
                    sizes={`100vw, 33vw`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className='image'
                  />
                </ImageWrapper>
              </SwiperSlide>
            </Swiper>
            <ContentHeading>
              <div>Body</div>
            </ContentHeading>
            <div>Expert training classes with experienced teachers in yoga, cardio, strength, mobility, flexibility and alignment. We take pride in our healthy, organic local food during the retreat.</div>
          </ContentItem>
          <ContentItem>
            <Swiper
              loop
              navigation={true}
              modules={[Navigation]}
            >
              <SwiperSlide>
                <ImageWrapper>
                  <Image
                    src='/assets/images/gallery/training-4.jpg'
                    alt='Retreat'
                    sizes={`100vw, 33vw`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className='image'
                  />
                </ImageWrapper>
              </SwiperSlide>
            </Swiper>
            <ContentHeading>
              <div>Soul</div>
            </ContentHeading>
            <div>Meditation with a real monk, traditional Balinese ceremonies, qi gong, yoga nidra, breath-work, sound healing and excursions to secret Hindu temples and waterfalls around Bali.</div>
          </ContentItem>
        </Content>
      </Container>
    </Section>
  )
}
