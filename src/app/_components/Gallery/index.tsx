'use client'

import Image from 'next/image'
import Container from '../Container';
import { GalleryContainer, GalleryContent, GalleryHeading, ImageWrapper } from './styles'

type Props = {
  title: string;
  images: string[];
};

export default function Gallery({ title, images }: Props) {
  return (
    <GalleryContainer>
      <Container>
        <GalleryHeading>{title}</GalleryHeading>
        <GalleryContent>
          <div className='col-1'>
            <div>
              <ImageWrapper>
                <Image
                  src={images[0]}
                  alt='Joga Yoga Teacher Trainings'
                  sizes={`100vw, 33vw`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </ImageWrapper>
            </div>
            <div>
              <ImageWrapper>
                <Image
                  src={images[1]}
                  alt='Joga Yoga Teacher Trainings'
                  sizes={`100vw, 33vw`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </ImageWrapper>
            </div>
          </div>
          <div className='col-2'>
            <div>
              <ImageWrapper className='image'>
                <Image
                  src={images[2]}
                  alt='Joga Yoga Teacher Trainings'
                  sizes={`100vw, 33vw`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </ImageWrapper>
            </div>
          </div>
          <div className='col-3'>
            <div>
              <ImageWrapper>
                <Image
                  src={images[3]}
                  alt='Joga Yoga Teacher Trainings'
                  sizes={`100vw, 33vw`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </ImageWrapper>
            </div>
            <div className='col-4'>
              <div>
                <ImageWrapper className='image'>
                  <Image
                    src={images[4]}
                    alt='Joga Yoga Teacher Trainings'
                    sizes={`100vw, 33vw`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </ImageWrapper>
              </div>
              <div>
                <ImageWrapper className='image'>
                  <Image
                    src={images[5]}
                    alt='Joga Yoga Teacher Trainings'
                    sizes={`100vw, 33vw`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </ImageWrapper>
              </div>
            </div>
          </div>
        </GalleryContent>
      </Container>
    </GalleryContainer>
  )
}
