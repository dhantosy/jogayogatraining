'use client'

import { VideoItem, VideoSection, Heading } from './styles'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { HiArrowLongRight, HiMiniXCircle } from "react-icons/hi2"

export default function VideoTestimonial() {
  return (
    <>
      <Heading>Interviews with the Students</Heading>
      <VideoSection>
        <Swiper
          loop
          navigation
          modules={[Autoplay, Navigation]}
          pagination={{ clickable: true }}
          breakpoints={{
            1: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
          slidesPerView={4}
        >
          <SwiperSlide>
            <VideoItem>
              <iframe src="https://www.youtube.com/embed/shWPub9onxY" title="Empowered by Knowledge: My Joga Yoga Teacher Training Review" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope"></iframe>
            </VideoItem>
          </SwiperSlide>
          <SwiperSlide>
            <VideoItem>
              <iframe src="https://www.youtube.com/embed/mC5fEZhWgmE" title="Empowered by Knowledge: My Joga Yoga Teacher Training Review" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope"></iframe>
            </VideoItem>
          </SwiperSlide>
          <SwiperSlide>
            <VideoItem>
              <iframe src="https://www.youtube.com/embed/g5TnhzXnWig" title="Empowered by Knowledge: My Joga Yoga Teacher Training Review" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope"></iframe>
            </VideoItem>
          </SwiperSlide>
          <SwiperSlide>
            <VideoItem>
              <iframe src="https://www.youtube.com/embed/xVW0hEQw6q4" title="Empowered by Knowledge: My Joga Yoga Teacher Training Review" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope"></iframe>
            </VideoItem>
          </SwiperSlide>
          <SwiperSlide>
            <VideoItem>
              <iframe src="https://www.youtube.com/embed/_Hp0SQpxgYg" title="Empowered by Knowledge: My Joga Yoga Teacher Training Review" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope"></iframe>
            </VideoItem>
          </SwiperSlide>
          <SwiperSlide>
            <VideoItem>
              <iframe src="https://www.youtube.com/embed/_oEsunZAzRg" title="Empowered by Knowledge: My Joga Yoga Teacher Training Review" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope"></iframe>
            </VideoItem>
          </SwiperSlide>
        </Swiper>
        {/* <div>
          <VideoItem>
            <div />
            <iframe src="https://www.youtube.com/embed/_Hp0SQpxgYg" title="Unveiling My Yoga Teacher Training Experience" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </VideoItem>
          <VideoItem>
            <div />
            <iframe src="https://www.youtube.com/embed/xVW0hEQw6q4" title="How our last day of YTT looks like" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </VideoItem>
          <VideoItem>
            <div />
            <iframe src="https://www.youtube.com/embed/g5TnhzXnWig" title="Ratna Shows Her True Experience On The 200 Hour Joga Yoga Teacher Training In Bali" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </VideoItem>
        </div> */}
      </VideoSection>
    </>
  )
}
