'use client'

import Image from 'next/image'
import { IoMdCheckmarkCircle } from "react-icons/io";
import Container from '@/app/_components/Container'
import { ContentHeading, ContentItem, ImageWrapper, Gallery, ContentList, ListItem } from './styles'
import ImageExcursion from 'public/assets/images/gallery/excursion-1.jpg'

export default function Meditation() {
  return (
    <Container>
      <Gallery>
        <div className='flex'>
          <div className='text'>
            <ContentHeading>A Pathway to Personal Development and Well-Being</ContentHeading>
            <ContentItem>
              <div>Doing Yoga Teacher Training doesn’t necessarily mean you have to actually teach yoga.</div>
              <div>You will find that Yoga Teacher Training brings a lot of benefits such as:</div>
              <ContentList>
                <ListItem>
                  <div><IoMdCheckmarkCircle /></div>
                  <div>Physical & Emotional Growth</div>
                </ListItem>
                <ListItem>
                  <div><IoMdCheckmarkCircle /></div>
                  <div>Deepen Your Yoga Knowledge</div>
                </ListItem>
                <ListItem>
                  <div><IoMdCheckmarkCircle /></div>
                  <div>Network with Like-Minded People</div>
                </ListItem>
              </ContentList>
            </ContentItem>
          </div>
          <ImageWrapper>
            <Image
              src={ImageExcursion.src}
              placeholder='blur'
              blurDataURL={ImageExcursion.blurDataURL}
              alt='yoga teacher training activity'
              sizes={`100vw, 33vw`}
              fill
              style={{ objectFit: 'cover' }}
              className='image'
            />
          </ImageWrapper>
        </div>
      </Gallery>
    </Container>
  )
}
