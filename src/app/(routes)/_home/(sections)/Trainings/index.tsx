'use client'

import Link from 'next/link';
import Image from 'next/image'
import Container from '@/app/_components/Container'
import { HiCalendarDays, HiMapPin, HiCheck } from "react-icons/hi2";

import { Section, Title, Subtitle, Heading, Content, ContentHeading, ContentBody, ContentItem, ContentTitle, ContentDetail, ContentList, Icon, ImageWrapper, ButtonMore, Discount } from './styles'
import trainings from '@/data/trainings';


export default function Trainings() {
  return (
    <Section>
      <Container>
        <Heading>
          <Title>Our Available Trainings</Title>
          <Subtitle>Pick Your Date & Register Now</Subtitle>
        </Heading>
        <Content>
          {trainings.map(({ photo, title, startDate, location, list, discount, discountText, link }) => {

            return (
              <ContentItem key={startDate}>
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
                        <div>{startDate}</div>
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
                  <Link href={link}>
                    <ButtonMore>See Detail</ButtonMore>
                  </Link>
                </ContentBody>
              </ContentItem>
            )
          })}

        </Content>
      </Container>
    </Section>
  )
}
