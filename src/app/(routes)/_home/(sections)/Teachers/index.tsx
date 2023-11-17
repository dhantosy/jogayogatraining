'use client'

import Image from 'next/image'
import Link from 'next/link'
import { HiArrowLongRight } from "react-icons/hi2"
import Container from '@/app/_components/Container'
import { Section, Title, Name, Heading, Content, ContentHeading, ContentItem, ImageWrapper, More, Icon } from './styles'

export default function Teachers() {
  return (
    <Section id='dive-courses'>
      <Container>
        <Heading>
          <Title>Our Beautiful Yoga Teachers</Title>
          <Link href='/'>
            <More>
              <div>See More Teachers</div>
              <Icon><HiArrowLongRight /></Icon>
            </More>
          </Link>
        </Heading>
        <Content>
          <ContentItem>
            <ImageWrapper className='image-wrapper'>
              <Image
                src='/assets/images/teacher-1.png'
                alt='YTT'
                sizes={`100vw, 33vw`}
                width='300'
                height='423'
                className='photo'
              />
            </ImageWrapper>
            <Name>Joseph</Name>
          </ContentItem>
          <ContentItem>
            <ImageWrapper className='image-wrapper'>
              <Image
                src='/assets/images/teacher-2.png'
                alt='YTT'
                sizes={`100vw, 33vw`}
                width='300'
                height='423'
                className='photo'
              />
            </ImageWrapper>
            <Name>Nina</Name>
          </ContentItem>
          <ContentItem>
            <ImageWrapper className='image-wrapper'>
              <Image
                src='/assets/images/teacher-3.png'
                alt='YTT'
                sizes={`100vw, 33vw`}
                width='300'
                height='423'
                className='photo'
              />
            </ImageWrapper>
            <Name>Dada</Name>
          </ContentItem>
          <ContentItem>
            <ImageWrapper className='image-wrapper'>
              <Image
                src='/assets/images/teacher-4.png'
                alt='YTT'
                sizes={`100vw, 33vw`}
                width='300'
                height='423'
                className='photo'
              />
            </ImageWrapper>
            <Name>Charlotte</Name>
          </ContentItem>
        </Content>
      </Container>
    </Section>
  )
}
