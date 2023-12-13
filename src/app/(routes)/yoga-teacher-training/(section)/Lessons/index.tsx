'use client'

import Image from 'next/image'
import { HiCheck } from "react-icons/hi2";
import Container from '@/app/_components/Container'
import { Section, Subtitle, ImageWrapper, Content, ContentSub, Icon, List, Title } from './styles'

const data = [
  'Yoga Asana, Pranayamas & Kriyas',
  'Traditional Yoga Techniques',
  'The Yoga Sutras of Patanjali',
  'Singing Mantras',
  'Teaching Methodology & Styles',
  'Teaching skills, practice, & voice development',
  'Strength, Flexibility and Heart Openings',
  'Yoga Therapy & Alignment',
  'Sanskrit terminology',
  'Yoga Anatomy and Physiology',
  'Nutrition & Yoga lifestyle',
  'Adjustments and Healing techniques',
  'Understanding the Bandhas & Gunas',
  'Business aspects of Yoga Teaching'
];

export default function Lessons() {
  return (
    <Section>
      <Container>
        <Content>
          <div>
            <ImageWrapper>
              <Image
                src='/assets/images/gallery/training-10.jpg'
                alt='YTT'
                sizes={`100vw, 33vw`}
                width='600'
                height='441'
              />
            </ImageWrapper>
          </div>
          <div>
            <ContentSub>
              <Title>What You`ll Learn</Title>
              <Subtitle>This course provides an in-depth understanding of all aspects of yoga, including:</Subtitle>
              <div>
                {data.map((text, index) => {

                  return (
                    <List key={index}>
                      <Icon>
                        <HiCheck />
                      </Icon>
                      <div>{text}</div>
                    </List>
                  )
                })}
              </div>
            </ContentSub>
          </div>
        </Content>
      </Container>
    </Section>
  )
}
