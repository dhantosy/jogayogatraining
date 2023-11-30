'use client'

import Image from 'next/image'
import { HiArrowLongRight, HiMiniStar } from 'react-icons/hi2'
import Container from '@/app/_components/Container'
import { data } from '@/data/testimonials'
import { CardHorizontal, CardHorizontalBottom, CardHorizontalContent, CardHorizontalDescription, CardHorizontalDetail, CardHorizontalTitle, CardHorizontalWrapper, ImageWrapper, Rating, Section, Wrapper } from './styles'

export default function Reviews() {
  return (
    <Container>
      <Section>
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
