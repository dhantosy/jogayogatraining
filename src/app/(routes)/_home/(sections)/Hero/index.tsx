'use client'

import Image from 'next/image'
import Container from '@/app/_components/Container'
import { Section, Content, VideoWrapper, Title, Subtitle, ImageWrapper, Logos } from './styles'

export default function Hero() {
  return (
    <Section id='intro-banner'>
      <VideoWrapper>
        <video
          autoPlay
          loop
          muted
          webkit-playsinline='true'
          playsInline
          poster='/assets/images/video-poster.jpg'
        >
          <source
            src='/assets/images/video-joga-yoga.mp4'
            type='video/mp4'
          />
        </video>
      </VideoWrapper>
      <Container>
        <Content>
          <Subtitle>JOGA YOGA TRAINING</Subtitle>
          <Title>Ignite Your Inner Light and Inspire the World</Title>
          <Subtitle className='bottom'>Yoga Alliance Certified Teacher Training Course in Bali</Subtitle>
          <Logos>
            <ImageWrapper>
              <Image
                src='/assets/images/logo-rys.png'
                alt=''
                sizes={`100vw, 33vw`}
                fill
                style={{ objectFit: 'cover' }}
                className='image desktop'
                priority
              />
              <Image
                src='/assets/images/logo-rys-black.png'
                alt=''
                sizes={`100vw, 33vw`}
                fill
                style={{ objectFit: 'cover' }}
                className='image mobile'
                priority
              />
            </ImageWrapper>
            <ImageWrapper>
              <Image
                src='/assets/images/rys-300-logo-white.png'
                alt=''
                sizes={`100vw, 33vw`}
                fill
                style={{ objectFit: 'cover' }}
                className='image desktop'
                priority
              />
              <Image
                src='/assets/images/rys-300-logo.png'
                alt=''
                sizes={`100vw, 33vw`}
                fill
                style={{ objectFit: 'cover' }}
                className='image mobile'
                priority
              />
            </ImageWrapper>
            <ImageWrapper>
              <Image
                src='/assets/images/yacep-logo-white.png'
                alt=''
                sizes={`100vw, 33vw`}
                fill
                style={{ objectFit: 'cover' }}
                className='image desktop'
                priority
              />
              <Image
                src='/assets/images/yacep-logo.png'
                alt=''
                sizes={`100vw, 33vw`}
                fill
                style={{ objectFit: 'cover' }}
                className='image mobile'
                priority
              />
            </ImageWrapper>
          </Logos>
        </Content>
      </Container>

      <style jsx global>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
    </Section>
  )
}
