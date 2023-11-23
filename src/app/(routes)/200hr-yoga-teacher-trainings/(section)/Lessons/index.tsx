'use client'

import Image from 'next/image'
import { HiCheck } from "react-icons/hi2";
import Container from '@/app/_components/Container'
import { Section, Subtitle, ImageWrapper, Content, ContentSub, Icon, List } from './styles'

const data = [
  'Yoga Asana Fundamentals',
  'In-depth Yoga Philosophy',
  'The Yoga Sutras of Patanjali',
  'Singing Mantras from India',
  'Teaching Methodology',
  'Teaching skills & voice development',
  'Strength, Flexibility and Heart Openings',
  'Yoga Therapy & Alignment',
  'Sanskrit terminology',
  'Yoga Anatomy and Physiology',
  'Nutrition & Yoga lifestyle',
  'Adjustments and Healing techniques',
  'Understanding the Bandhas & Gunas',
  'Yoga Business in the modern world​'
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
