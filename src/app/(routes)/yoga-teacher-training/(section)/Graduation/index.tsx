'use client'

import Image from 'next/image'
import Container from '@/app/_components/Container'
import { Heading, Section, Subtitle, Title, ImageWrapper, Photos } from './styles'
import ImageTrainingOne from 'public/assets/images/gallery/training-6.jpg'
import ImageTrainingTwo from 'public/assets/images/gallery/training-13.jpg'
import ImageTrainingThree from 'public/assets/images/course-1.jpg'

export default function Graduation() {
  return (
    <Container>
      <Section>
        <Heading>
          <Title>Certified Yoga Teacher</Title>
          <Subtitle>Upon completion of the 200 Hours Yoga Teacher Training, you will leave as an empowered, knowledgeable, and confident yoga teacher who can lead inspirational yoga classes for all levels.</Subtitle>
          <Subtitle>You will be able to understand & teach Creative Vinyasa Flow Sequence (all level), Hatha Vinyasa Flow Sequence, Basic Ashtanga Vinyasa, Understanding the principles of Yin/Restorative Yoga, Yoga Nidra and Meditation.</Subtitle>
          <Photos>
            <ImageWrapper className='photo'>
              <Image
                src={ImageTrainingOne.src}
                alt='Yoga teacher training graduations'
                placeholder='blur'
                blurDataURL={ImageTrainingOne.blurDataURL}
                sizes={`100vw, 33vw`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </ImageWrapper>
            <ImageWrapper className='photo'>
              <Image
                src={ImageTrainingTwo.src}
                alt='Yoga teacher training graduations'
                placeholder='blur'
                blurDataURL={ImageTrainingOne.blurDataURL}
                sizes={`100vw, 33vw`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </ImageWrapper>
            <ImageWrapper className='photo'>
              <Image
                src={ImageTrainingThree.src}
                alt='Yoga teacher training graduations'
                placeholder='blur'
                blurDataURL={ImageTrainingOne.blurDataURL}
                sizes={`100vw, 33vw`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </ImageWrapper>
          </Photos>
        </Heading>
      </Section>
    </Container>
  )
}
