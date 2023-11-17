'use client'

import Link from 'next/link'
import Image from 'next/image'
import { HiArrowLongRight } from "react-icons/hi2";
import Container from '@/app/_components/Container'
import { Section, Title, Subtitle, Heading, ImageWrapper, Content, More, Icon, ContentSub } from './styles'

export default function About() {
  return (
    <Section>
      <Container>
        <Heading>
          <Title>100 hour and 200 hour creative Vinyasa YTT in Bali</Title>
        </Heading>
        <Content>
          <ImageWrapper>
            <Image
              src='/assets/images/gallery-1.jpg'
              alt='YTT'
              sizes={`100vw, 33vw`}
              width='600'
              height='441'
            />
          </ImageWrapper>
          <ContentSub>
            <Subtitle>Welcome to our yoga alliance certified 100 and 200 hour Vinyasa Yoga Teacher Training! One of the most authentic and in-depth yoga teacher trainings on beautiful Bali island. We’ve sourced some of the best local & international certified yoga teachers to guide you on this inspiring journey.</Subtitle>
            <Link href='/'>
              <More>
                <div>More About Us</div>
                <Icon><HiArrowLongRight /></Icon>
              </More>
            </Link>
          </ContentSub>
        </Content>
      </Container>
    </Section>
  )
}
