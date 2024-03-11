'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { HiArrowLongRight, HiMiniStar } from 'react-icons/hi2'
import Container from '@/app/_components/Container'
import { Section, Title, Name, Subtitle, Source, Heading, BoxContainer, Rating, Top, ImageWrapper, More, Icon, ImageWrapperInner, SlideItem } from './styles'
import { data } from '@/data/testimonials'

export default function TestimonialsSection() {
  return (
    <Section id='testimonials'>
      <Container>
        <Heading>
          <Title>What Our Graduates Say</Title>
          <Link href='/testimonials'>
            <More>
              <div>See More Reviews</div>
              <Icon><HiArrowLongRight /></Icon>
            </More>
          </Link>
        </Heading>
        <BoxContainer>
          <Swiper
            loop
            navigation
            modules={[Autoplay, Pagination, Navigation]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            breakpoints={{
              1: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            slidesPerView={2}
          >
            {data.slice(0, 6).map(({ name, photo, country, job, title, date }) => {

              return (
                <SwiperSlide key={name}>
                  <SlideItem>
                    <Top>
                      <ImageWrapper>
                        <ImageWrapperInner>
                          <Image
                            src={photo}
                            alt=''
                            sizes={`100vw, 33vw`}
                            fill
                            style={{ objectFit: 'cover' }}
                            className='image'
                          />
                        </ImageWrapperInner>
                      </ImageWrapper>
                      <div className='info'>
                        <Name>{name}</Name>
                        <div>{country}</div>
                        <div>{job}</div>
                      </div>
                    </Top>
                    <Subtitle>{title}</Subtitle>
                    <Rating>
                      {Array.apply(null, Array(5)).map((_, i) => {
                        return (
                          <HiMiniStar key={i} />
                        )
                      })}
                    </Rating>
                    <Source>{`Graduation Date: ${date}`}</Source>
                  </SlideItem>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </BoxContainer>
      </Container>
    </Section>
  )
}
