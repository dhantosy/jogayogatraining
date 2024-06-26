'use client'

import Image from 'next/image'
import Container from '@/app/_components/Container'
import { Section, Content, VideoWrapper, Title, Subtitle, ImageWrapper, Logos, TitleSmall, HeroMobile } from './styles'
import useWindowSize from '@/hooks/useWindowSize'
import ImageBannerMobile from 'public/assets/images/joga-yoga.jpg'

export default function Hero() {
  const size = useWindowSize();

  return (
    <Section id='intro-banner'>
      <VideoWrapper>
        {size.width > 768 && (
          <video
            autoPlay
            loop
            muted
            poster='/assets/images/video-poster.jpg'
          >
            <source
              src='/assets/images/video-joga-yoga.mp4'
              type='video/mp4'
            />
          </video>
        )}
        <HeroMobile>
          <Image
            src={ImageBannerMobile.src}
            placeholder='blur'
            blurDataURL={ImageBannerMobile.blurDataURL}
            alt='Joga Yoga Training Banner Mobil'
            sizes={`100vw, 33vw`}
            fill
            style={{ objectFit: 'cover' }}
            className='hero'
            priority
          />
        </HeroMobile>
      </VideoWrapper>
      <Container>
        <Content>
          {/* <Subtitle>JOGA YOGA TRAINING</Subtitle> */}
          <Title>Joga Yoga Training</Title>
          <TitleSmall>A Health Conscious
            Community in Bali</TitleSmall>
          <Subtitle className='bottom'>Yoga alliance certified teacher training and retreats</Subtitle>
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
