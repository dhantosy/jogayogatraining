'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { HiArrowLongRight, HiMiniXCircle } from "react-icons/hi2"
import Container from '@/app/_components/Container'
import ProfileCard from '@/app/_components/ProfileCard'
import { Section, Title, Heading, Content, More, Icon, IconClose } from './styles'
import { teachersRetreat } from '@/data/teachers'
import { PopUpContainerOuter, PopUpContainerOverlay, PopUpContainerInner, PopUpContent, PopUpContentName, PopUpContentDesc } from '@/app/(routes)/teachers/(section)/TeachersSection/styles'

type Props = {
  name: string;
  description?: string;
  photo: string;
  title: string;
  onProfileClick: (param: Props) => void;
};

export default function Teachers() {
  const [isActive, setIsActive] = useState(false);
  const [activeProfile, setActiveProfile] = useState({
    name: '',
    description: '',
  })

  const handleClick = (param: Props) => {
    setActiveProfile({
      name: param.name,
      description: param?.description || '',
    });
    setIsActive(true);
  }

  return (
    <Section>
      <Container>
        <Heading>
          <Title>Our Yoga Retreat Teachers</Title>
        </Heading>
        <Content>
          <Swiper
            loop
            navigation
            modules={[Autoplay, Pagination, Navigation]}
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
            slidesPerView={2}
          >
            {teachersRetreat.map(({ name, description, photo, title }) => {

              return (
                <SwiperSlide key={name}>
                  <ProfileCard key={name} name={name} description={description} photo={photo} title={title} onProfileClick={handleClick} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </Content>
      </Container>
      {isActive && (
        <PopUpContainerOuter>
          <PopUpContainerOverlay onClick={() => setIsActive(false)} />
          <PopUpContainerInner>
            <PopUpContent>
              <IconClose onClick={() => setIsActive(false)}>
                <HiMiniXCircle />
              </IconClose>
              <PopUpContentName>{activeProfile.name}</PopUpContentName>
              <PopUpContentDesc>{activeProfile.description}</PopUpContentDesc>
            </PopUpContent>
          </PopUpContainerInner>
        </PopUpContainerOuter>
      )}
    </Section>
  )
}
