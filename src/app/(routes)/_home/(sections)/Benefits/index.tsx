'use client'

import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Container from '@/app/_components/Container'
import { Section, Title, Subtitle, Heading, Content, ContentHeading, ContentItem, ImageWrapper } from './styles'
import ImageFoodOne from 'public/assets/images/food-1.jpg';
import ImageFoodTwo from 'public/assets/images/decision-food.jpg';
import ImageFoodThree from 'public/assets/images/food-2.jpg';
import ImageFoodFour from 'public/assets/images/food-3.jpg';
import ImageFoodFive from 'public/assets/images/food-4.jpg';
import ImageFoodSix from 'public/assets/images/food-5.jpg';
import ImageTeacherOne from 'public/assets/images/teacher-1.jpg';
import ImageTeacherTwo from 'public/assets/images/teacher-2.jpg';
import ImageTeacherThree from 'public/assets/images/teacher-3.jpg';
import ImageTeacherFour from 'public/assets/images/decision-teachers.jpg';
import ImagePlaceOne from 'public/assets/images/decision-place.jpg';
import ImagePlaceTwo from 'public/assets/images/location-1.jpg';
import ImagePlaceThree from 'public/assets/images/location-2.jpg';
import ImagePlaceFour from 'public/assets/images/location-3.jpg';


export default function Benefits() {
  return (
    <Section>
      <Container>
        <Heading>
          <Title>Your Best Decision Yet</Title>
          <Subtitle>We offer one of the best yoga training programs for three reasons.</Subtitle>
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
                    src={ImageFoodOne.src}
                    placeholder='blur'
                    blurDataURL={ImageFoodOne.blurDataURL}
                    alt='YTT'
                    sizes={`100vw, 33vw`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className='image'
                  />
                </ImageWrapper>
              </SwiperSlide>
              <SwiperSlide>
                <ImageWrapper>
                  <Image
                    src={ImageFoodTwo.src}
                    alt='YTT'
                    placeholder='blur'
                    blurDataURL={ImageFoodTwo.blurDataURL}
                    sizes={`100vw, 33vw`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className='image'
                  />
                </ImageWrapper>
              </SwiperSlide>
              <SwiperSlide>
                <ImageWrapper>
                  <Image
                    src={ImageFoodThree.src}
                    alt='YTT'
                    placeholder='blur'
                    blurDataURL={ImageFoodThree.blurDataURL}
                    sizes={`100vw, 33vw`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className='image'
                  />
                </ImageWrapper>
              </SwiperSlide>
              <SwiperSlide>
                <ImageWrapper>
                  <Image
                    src={ImageFoodFour.src}
                    alt='YTT'
                    placeholder='blur'
                    blurDataURL={ImageFoodFour.blurDataURL}
                    sizes={`100vw, 33vw`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className='image'
                  />
                </ImageWrapper>
              </SwiperSlide>
              <SwiperSlide>
                <ImageWrapper>
                  <Image
                    src={ImageFoodFive.src}
                    alt='YTT'
                    placeholder='blur'
                    blurDataURL={ImageFoodFive.blurDataURL}
                    sizes={`100vw, 33vw`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className='image'
                  />
                </ImageWrapper>
              </SwiperSlide>
              <SwiperSlide>
                <ImageWrapper>
                  <Image
                    src={ImageFoodSix.src}
                    alt='YTT'
                    placeholder='blur'
                    blurDataURL={ImageFoodSix.blurDataURL}
                    sizes={`100vw, 33vw`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className='image'
                  />
                </ImageWrapper>
              </SwiperSlide>
            </Swiper>
            <ContentHeading>
              <div className='number'>01.</div>
              <div>Organic Food</div>
            </ContentHeading>
            <div>We take pride in our healthy and delicious vegetarian & vegan menu. We make sure the food is sourced locally and organically grown. The food is based on an alkaline diet, staying away from most acidic food. We also cater for gluten free & lacto free diets upon request.</div>
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
                    src={ImageTeacherOne.src}
                    alt='YTT'
                    placeholder='blur'
                    blurDataURL={ImageTeacherOne.blurDataURL}
                    sizes={`100vw, 33vw`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className='image'
                  />
                </ImageWrapper>
              </SwiperSlide>
              <SwiperSlide>
                <ImageWrapper>
                  <Image
                    src={ImageTeacherTwo.src}
                    alt='YTT'
                    placeholder='blur'
                    blurDataURL={ImageTeacherTwo.blurDataURL}
                    sizes={`100vw, 33vw`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className='image'
                  />
                </ImageWrapper>
              </SwiperSlide>
              <SwiperSlide>
                <ImageWrapper>
                  <Image
                    src={ImageTeacherThree.src}
                    alt='YTT'
                    placeholder='blur'
                    blurDataURL={ImageTeacherThree.blurDataURL}
                    sizes={`100vw, 33vw`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className='image'
                  />
                </ImageWrapper>
              </SwiperSlide>
              <SwiperSlide>
                <ImageWrapper>
                  <Image
                    src={ImageTeacherFour.src}
                    alt='YTT'
                    placeholder='blur'
                    blurDataURL={ImageTeacherFour.blurDataURL}
                    sizes={`100vw, 33vw`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className='image'
                  />
                </ImageWrapper>
              </SwiperSlide>
            </Swiper>
            <ContentHeading>
              <div className='number'>02.</div>
              <div>Best Certified Yoga Teachers</div>
            </ContentHeading>
            <div>All teachers have their 200 RYT or 500 RYT from Yoga Alliance and have devoted their life to the practise of yoga on and off the mat. This training is catered for people of all levels who want to deepen their knowledge of yoga. Please see our 5 star reviews.</div>
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
                    src={ImagePlaceOne.src}
                    alt='YTT'
                    placeholder='blur'
                    blurDataURL={ImagePlaceOne.blurDataURL}
                    sizes={`100vw, 33vw`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className='image'
                  />
                </ImageWrapper>
              </SwiperSlide>
              <SwiperSlide>
                <ImageWrapper>
                  <Image
                    src={ImagePlaceTwo.src}
                    alt='YTT'
                    placeholder='blur'
                    blurDataURL={ImagePlaceTwo.blurDataURL}
                    sizes={`100vw, 33vw`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className='image'
                  />
                </ImageWrapper>
              </SwiperSlide>
              <SwiperSlide>
                <ImageWrapper>
                  <Image
                    src={ImagePlaceThree.src}
                    alt='YTT'
                    placeholder='blur'
                    blurDataURL={ImagePlaceThree.blurDataURL}
                    sizes={`100vw, 33vw`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className='image'
                  />
                </ImageWrapper>
              </SwiperSlide>
              <SwiperSlide>
                <ImageWrapper>
                  <Image
                    src={ImagePlaceFour.src}
                    alt='YTT'
                    placeholder='blur'
                    blurDataURL={ImagePlaceFour.blurDataURL}
                    sizes={`100vw, 33vw`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className='image'
                  />
                </ImageWrapper>
              </SwiperSlide>
            </Swiper>
            <ContentHeading>
              <div className='number'>03.</div>
              <div>Stunning Location</div>
            </ContentHeading>
            <div>Our location is in the heart of Canggu, only 5 minutes to the beach. We offer private, twin share and dorm. We have a big pool, yoga studio with a wooden floor, lots of plants and a beautiful surrounding! We have a vegan cafe area, free wifi, free clean drinking water and so much more.</div>
          </ContentItem>
        </Content>
      </Container>
    </Section>
  )
}
