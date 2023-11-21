'use client'

import Image from 'next/image'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { HiArrowLongRight, HiMiniStar } from "react-icons/hi2"
import Container from '@/app/_components/Container'
import { Section, Title, Name, Subtitle, Source, Heading, BoxContainer, Rating, Top, ImageWrapper, More, Icon, ImageWrapperInner } from './styles'
import Link from 'next/link'

const data = [
  {
    name: 'Dakota Mays',
    photo: '/assets/images/review-1.jpg',
    country: 'Australia',
    job: 'Key Opinion Leader',
    title: 'This training was everything I could’ve asked for. After leaving, I was more than prepared to teach and start my full- time job as a yoga instructor. This isn’t a cookie - cutter training so expect to push yourself throughout the 24 - day training. I’m hopeful that my next training lives up to what this training offered me 🙏🏼',
    date: 'January 2022',
  },
  {
    name: 'Beth James',
    photo: '/assets/images/review-2.jpg',
    country: 'United States',
    job: 'Accountant',
    title: 'One of the most important and life changing experiences ofr my life, my training with Joga Yoga exceed my highest expectations. Learning from experts, within their differning fields of yoga and philosophy, with an intimate group in a stunning setting, created such joy, connection and growth for me on a mental, physical and spiritual level. My training has given me the knowledge, skills and confidence to begin teaching private and group classes.Thank you!',
    date: 'April 2022',
  },
  {
    name: 'Alba Alcàcer',
    photo: '/assets/images/review-3.jpg',
    country: 'Spain',
    job: 'Marketing Manager',
    title: 'The YTT of Joga Yoga was so great! I learnt a lot and now I am teaching at Serenity Eco Guesthouse. There is a lot of teachers to help you in your yoga journey specialised in different areas. The course give a general knowledge that will make you able to teach your classes in the future. The location is also great!',
    date: 'October 2020',
  },
  {
    name: 'Patrick Di Battista',
    photo: '/assets/images/review-4.jpg',
    country: 'Portugal',
    job: 'Lawyer',
    title: 'Joe and the crew from Joga Yoga simply changed our lives. This may sounds big but the time we spend with them was just perfect for all of us. We are a family of 5 and Joe kindly offered to bring our kids to all the classes and activities. So not only we could learn and grow but also our kids learned from Joe, Dada, Puspa, the other teachers and people we met there.',
    date: 'February 2022',
  },
  {
    name: 'Laura Poelman',
    photo: '/assets/images/review-5.jpg',
    country: 'United States',
    job: 'HR Generalist',
    title: 'A life changing event in the most beautiful setting. It was exactly what I needed in this time of my life. I’m incredibly grateful for everything I have learned. A big warm thank you from the bottom of my heart to all the teachers and everyone who made it possible, and to my fellow yogi/classmates. Each and every one of you brought something different to the table and I loved it! Would recommend 100% and do it again!',
    date: 'March 2022',
  },
]

export default function Testimonials() {
  return (
    <Section id='testimonials'>
      <Container>
        <Heading>
          <Title>What Our Graduates Say</Title>
          <Link href='/'>
            <More>
              <div>See More Reviews</div>
              <Icon><HiArrowLongRight /></Icon>
            </More>
          </Link>
        </Heading>
        <BoxContainer>
          <Swiper
            loop
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={80}
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
            {data.map(({ name, photo, country, job, title, date }) => {

              return (
                <SwiperSlide key={name}>
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
                    <div>
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
                </SwiperSlide>
              )
            })}
          </Swiper>
        </BoxContainer>
      </Container>
    </Section>
  )
}
