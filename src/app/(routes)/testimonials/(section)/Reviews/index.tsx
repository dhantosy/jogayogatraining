'use client'

import Image from 'next/image'
import { HiMiniStar } from 'react-icons/hi2'
import Container from '@/app/_components/Container'
import { data } from '@/data/testimonials'
import { CardHorizontal, CardHorizontalBottom, CardHorizontalContent, CardHorizontalDescription, CardHorizontalDetail, CardHorizontalTitle, CardHorizontalWrapper, ImageWrapper, Rating, Section, VideoItem, VideoSection, Wrapper, Heading } from './styles'

export default function Reviews() {
  return (
    <Container>
      <Section>
        <Heading>Interviews with the Students</Heading>
        <VideoSection>
          <VideoItem>
            <iframe src="https://www.youtube.com/embed/_oEsunZAzRg" title="Empowered by Knowledge: My Joga Yoga Teacher Training Review" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share"></iframe>
          </VideoItem>
          <VideoItem>
            <div />
            <iframe src="https://www.youtube.com/embed/_Hp0SQpxgYg" title="Unveiling My Yoga Teacher Training Experience" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </VideoItem>
          <VideoItem>
            <div />
            <iframe src="https://www.youtube.com/embed/xVW0hEQw6q4" title="How our last day of YTT looks like" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </VideoItem>
        </VideoSection>
        <Heading>What Our Precious Students Say About Us</Heading>
        <Wrapper>
          {data.map(({ name, photo, country, job, title, date }) => {
            return (
              <CardHorizontal key={name}>
                <CardHorizontalWrapper>
                  <ImageWrapper>
                    <Image
                      src={photo}
                      alt={name}
                      sizes={`100vw, 33vw`}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </ImageWrapper>
                  <CardHorizontalContent>
                    <CardHorizontalTitle>{name}</CardHorizontalTitle>
                    <CardHorizontalDetail>
                      <div className='flex'>
                        <div>Origin:</div>
                        <div>{country}</div>
                      </div>
                      <div className='flex'>
                        <div>Occupation:</div>
                        <div>{job}</div>
                      </div>
                      <div className='flex'>
                        <div>Gradution Date:</div>
                        <div>{date}</div>
                      </div>
                    </CardHorizontalDetail>
                  </CardHorizontalContent>
                </CardHorizontalWrapper>
                <CardHorizontalBottom>
                  <CardHorizontalDescription>
                    <div>{title}</div>
                    <div>
                      <Rating>
                        {Array.apply(null, Array(5)).map((_, i) => {
                          return (
                            <HiMiniStar key={i} />
                          )
                        })}
                      </Rating>
                    </div>
                  </CardHorizontalDescription>
                </CardHorizontalBottom>
              </CardHorizontal>
            )
          })}
        </Wrapper>
      </Section>
    </Container>
  )
}
