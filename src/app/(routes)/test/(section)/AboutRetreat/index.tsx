'use client'

import Image from 'next/image'
import { IoMdCheckmarkCircle } from "react-icons/io";
import Container from '@/app/_components/Container'
import { Section, Title, Subtitle, Heading, ImageWrapper, Content, ContentSub, ContentItem, ContentList, ListItem } from './styles'

export default function AboutRetreat() {
  return (
    <Section>
      <Container>
        <Heading>
          <Title>When was the last time you put yourself first?</Title>
        </Heading>
        <Content>
          <ImageWrapper>
            <Image
              src='/assets/images/gallery/excursion-1.jpg'
              alt='YTT'
              sizes={`100vw, 33vw`}
              fill
              style={{ objectFit: 'cover' }}
            />
          </ImageWrapper>
          <ContentSub>
            <Subtitle>
              Mind - Body - Soul Retreat is your invitation to:
            </Subtitle>
            <ContentItem>
              <ContentList>
                <ListItem>
                  <div><IoMdCheckmarkCircle /></div>
                  <div>Reset your nervous system</div>
                </ListItem>
                <ListItem>
                  <div><IoMdCheckmarkCircle /></div>
                  <div>Make conscious friends for life</div>
                </ListItem>
                <ListItem>
                  <div><IoMdCheckmarkCircle /></div>
                  <div>Do deep work on your belief systems</div>
                </ListItem>
                <ListItem>
                  <div><IoMdCheckmarkCircle /></div>
                  <div>Clarify the next chapter of your life</div>
                </ListItem>
                <ListItem>
                  <div><IoMdCheckmarkCircle /></div>
                  <div>Explore the magical island of Bali</div>
                </ListItem>
                <ListItem>
                  <div><IoMdCheckmarkCircle /></div>
                  <div>Let go of what no longer serves you</div>
                </ListItem>
              </ContentList>
            </ContentItem>
            <div>
              <Subtitle>
                <strong>This is more than your average ‘retreat’.</strong>
              </Subtitle>
              <p>This is a rite of passage and a journey to return home to your true, limitless and eternally loveable self.</p>
              <p>It`s a life-changing holiday, all about you.</p>
            </div>
          </ContentSub>
        </Content>
      </Container>
    </Section>
  )
}
