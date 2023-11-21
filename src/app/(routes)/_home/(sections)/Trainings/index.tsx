'use client'

import Image from 'next/image'
import Container from '@/app/_components/Container'
import { HiCalendarDays, HiMapPin, HiCheck } from "react-icons/hi2";

import { Section, Title, Subtitle, Heading, Content, ContentHeading, ContentBody, ContentItem, ContentTitle, ContentDetail, ContentList, Icon, ImageWrapper, ButtonMore, Discount } from './styles'

const data = [
  {
    photo: '/assets/images/course-1.jpg',
    title: '200 Hour Yoga Teacher Training',
    date: '8 January, 2024',
    location: 'Joga Yoga, Canggu, Bali',
    link: '',
    list: [
      '200hr Yoga Alliance Certificate',
      'In-depth Yoga Philosophy',
      'Traditional Balinese Opening Ceremony',
      'And Many More!'
    ],
    discount: false,
    discountText: 'Early Bird Discount',
  },
  {
    photo: '/assets/images/course-2.jpg',
    title: '200 Hour Yoga Teacher Training',
    date: '4 March, 2024',
    location: 'Joga Yoga, Canggu, Bali',
    link: '',
    list: [
      '200hr Yoga Alliance Certificate',
      'In-depth Yoga Philosophy',
      'Traditional Balinese Opening Ceremony',
      'And Many More!'
    ],
    discount: true,
    discountText: '2 Seats Remaining',
  },
  {
    photo: '/assets/images/course-3.jpg',
    title: '200 Hour Yoga Teacher Training',
    date: '6 May, 2024',
    location: 'Joga Yoga, Canggu, Bali',
    link: '',
    list: [
      '200hr Yoga Alliance Certificate',
      'In-depth Yoga Philosophy',
      'Traditional Balinese Opening Ceremony',
      'And Many More!'
    ],
    discount: true,
    discountText: 'Early Bird Discount',
  }
]

export default function Trainings() {
  return (
    <Section>
      <Container>
        <Heading>
          <Title>Our Available Trainings</Title>
          <Subtitle>Pick Your Date & Register Now</Subtitle>
        </Heading>
        <Content>
          {data.map(({ photo, title, date, location, list, discount, discountText }) => {

            return (
              <ContentItem key={date}>
                {discount && (
                  <Discount>
                    {discountText}
                  </Discount>
                )}
                <ImageWrapper>
                  <Image
                    src={photo}
                    alt=''
                    sizes={`100vw, 33vw`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className='image'
                  />
                </ImageWrapper>
                <ContentBody>
                  <ContentHeading>
                    <ContentTitle>{title}</ContentTitle>
                    <div>
                      <ContentDetail>
                        <Icon>
                          <HiCalendarDays />
                        </Icon>
                        <div>{date}</div>
                      </ContentDetail>
                      <ContentDetail>
                        <Icon>
                          <HiMapPin />
                        </Icon>
                        <div>{location}</div>
                      </ContentDetail>
                    </div>
                  </ContentHeading>
                  <ContentList>
                    <div className='subtitle'>What You Get:</div>
                    {list.map((item, index) => {

                      return (
                        <ContentDetail key={index} className='bottom'>
                          <Icon>
                            <HiCheck />
                          </Icon>
                          <div>{item}</div>
                        </ContentDetail>
                      )
                    })}
                  </ContentList>
                  <ButtonMore>See Detail</ButtonMore>
                </ContentBody>
              </ContentItem>
            )
          })}

        </Content>
      </Container>
    </Section>
  )
}
