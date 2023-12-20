'use client'

import Image from 'next/image'
import { IoMdCheckmarkCircle } from "react-icons/io";
import Container from '@/app/_components/Container'
import { ContentHeading, ContentItem, ImageWrapper, Section, ContentList, ListItem } from './styles'

export default function CertificationDetail() {
  return (
    <Container>
      <Section>
        <div className='flex'>
          <div className='text'>
            <ContentHeading>About the Professional Certificate</ContentHeading>
            <ContentItem>
              <div>Details you might want to know about our Professional 200 Hours YTT Certification:</div>
              <ContentList>
                <ListItem>
                  <div><IoMdCheckmarkCircle /></div>
                  <div>Optional in Person or Hybrid Online YTT</div>
                </ListItem>
                <ListItem>
                  <div><IoMdCheckmarkCircle /></div>
                  <div>21 days to complete</div>
                </ListItem>
                <ListItem>
                  <div><IoMdCheckmarkCircle /></div>
                  <div>Max 25 students/course</div>
                </ListItem>
                <ListItem>
                  <div><IoMdCheckmarkCircle /></div>
                  <div>Lifetime access to our yoga community</div>
                </ListItem>
                <ListItem>
                  <div><IoMdCheckmarkCircle /></div>
                  <div>Upon completion this certificate enables you to teach anywhere in the world.</div>
                </ListItem>
                <ListItem>
                  <div><IoMdCheckmarkCircle /></div>
                  <div>Taught in: English
                    <div className='text-small'>
                      (Joga Yoga teachers can also speak
                      Indonesian and Spanish)
                    </div>
                  </div>
                </ListItem>
              </ContentList>
            </ContentItem>
          </div>
          <ImageWrapper>
            <Image
              src='/assets/images/gallery/about-3.jpg'
              alt='yoga teacher training activity'
              sizes={`100vw, 33vw`}
              fill
              style={{ objectFit: 'cover' }}
              className='image'
            />
          </ImageWrapper>
        </div>
      </Section>
    </Container>
  )
}
