'use client'

import Image from 'next/image'
import Container from '@/app/_components/Container'
import { HiCalendarDays, HiMapPin, HiCheck } from "react-icons/hi2";

import { Section, Title, Subtitle, Heading, Content, ContentHeading, ContentBody, ContentItem, ContentTitle, ContentDetail, ContentList, Icon, ImageWrapper, ButtonMore } from './styles'

export default function Trainings() {
  return (
    <Section>
      <Container>
        <Heading>
          <Title>Our Available Trainings</Title>
          <Subtitle>Pick Your Date & Register Now</Subtitle>
        </Heading>
        <Content>
          <ContentItem>
            <ImageWrapper>
              <Image
                src='/assets/images/course-1.jpg'
                alt=''
                sizes={`100vw, 33vw`}
                fill
                style={{ objectFit: 'cover' }}
                className='image'
              />
            </ImageWrapper>
            <ContentBody>
              <ContentHeading>
                <ContentTitle>200 HR YOGA TEACHER TRAINING IN BALI</ContentTitle>
                <div>
                  <ContentDetail>
                    <Icon>
                      <HiCalendarDays />
                    </Icon>
                    <div>8 January, 2024</div>
                  </ContentDetail>
                  <ContentDetail>
                    <Icon>
                      <HiMapPin />
                    </Icon>
                    <div>Joga Yoga, Canggu, Bali</div>
                  </ContentDetail>
                </div>
              </ContentHeading>
              <ContentList>
                <div className='subtitle'>What You Get:</div>
                <ContentDetail className='bottom'>
                  <Icon>
                    <HiCheck />
                  </Icon>
                  <div>200hr Yoga Alliance Certificate</div>
                </ContentDetail>
                <ContentDetail className='bottom'>
                  <Icon>
                    <HiCheck />
                  </Icon>
                  <div>In-depth Yoga Philosophy</div>
                </ContentDetail>
                <ContentDetail className='bottom'>
                  <Icon>
                    <HiCheck />
                  </Icon>
                  <div>Traditional Balinese Opening Ceremony</div>
                </ContentDetail>
                <ContentDetail className='bottom'>
                  <Icon>
                    <HiCheck />
                  </Icon>
                  <div>And Many More!</div>
                </ContentDetail>
              </ContentList>
              <ButtonMore>See Detail</ButtonMore>
            </ContentBody>
          </ContentItem>
          <ContentItem>
            <ImageWrapper>
              <Image
                src='/assets/images/course-2.jpg'
                alt=''
                sizes={`100vw, 33vw`}
                fill
                style={{ objectFit: 'cover' }}
                className='image'
              />
            </ImageWrapper>
            <ContentBody>
              <ContentHeading>
                <ContentTitle>200 HR YOGA TEACHER TRAINING IN BALI</ContentTitle>
                <div>
                  <ContentDetail>
                    <Icon>
                      <HiCalendarDays />
                    </Icon>
                    <div>4 March, 2024</div>
                  </ContentDetail>
                  <ContentDetail>
                    <Icon>
                      <HiMapPin />
                    </Icon>
                    <div>Joga Yoga, Canggu, Bali</div>
                  </ContentDetail>
                </div>
              </ContentHeading>
              <ContentList>
                <div className='subtitle'>What You Get:</div>
                <ContentDetail className='bottom'>
                  <Icon>
                    <HiCheck />
                  </Icon>
                  <div>200hr Yoga Alliance Certificate</div>
                </ContentDetail>
                <ContentDetail className='bottom'>
                  <Icon>
                    <HiCheck />
                  </Icon>
                  <div>In-depth Yoga Philosophy</div>
                </ContentDetail>
                <ContentDetail className='bottom'>
                  <Icon>
                    <HiCheck />
                  </Icon>
                  <div>Traditional Balinese Opening Ceremony</div>
                </ContentDetail>
                <ContentDetail className='bottom'>
                  <Icon>
                    <HiCheck />
                  </Icon>
                  <div>And Many More!</div>
                </ContentDetail>
              </ContentList>
              <ButtonMore>See Detail</ButtonMore>
            </ContentBody>
          </ContentItem>
          <ContentItem>
            <ImageWrapper>
              <Image
                src='/assets/images/course-3.jpg'
                alt=''
                sizes={`100vw, 33vw`}
                fill
                style={{ objectFit: 'cover' }}
                className='image'
              />
            </ImageWrapper>
            <ContentBody>
              <ContentHeading>
                <ContentTitle>200 HR YOGA TEACHER TRAINING IN BALI</ContentTitle>
                <div>
                  <ContentDetail>
                    <Icon>
                      <HiCalendarDays />
                    </Icon>
                    <div>6 May, 2024</div>
                  </ContentDetail>
                  <ContentDetail>
                    <Icon>
                      <HiMapPin />
                    </Icon>
                    <div>Joga Yoga, Canggu, Bali</div>
                  </ContentDetail>
                </div>
              </ContentHeading>
              <ContentList>
                <div className='subtitle'>What You Get:</div>
                <ContentDetail className='bottom'>
                  <Icon>
                    <HiCheck />
                  </Icon>
                  <div>200hr Yoga Alliance Certificate</div>
                </ContentDetail>
                <ContentDetail className='bottom'>
                  <Icon>
                    <HiCheck />
                  </Icon>
                  <div>In-depth Yoga Philosophy</div>
                </ContentDetail>
                <ContentDetail className='bottom'>
                  <Icon>
                    <HiCheck />
                  </Icon>
                  <div>Traditional Balinese Opening Ceremony</div>
                </ContentDetail>
                <ContentDetail className='bottom'>
                  <Icon>
                    <HiCheck />
                  </Icon>
                  <div>And Many More!</div>
                </ContentDetail>
              </ContentList>
              <ButtonMore>See Detail</ButtonMore>
            </ContentBody>
          </ContentItem>
        </Content>
      </Container>
    </Section>
  )
}
