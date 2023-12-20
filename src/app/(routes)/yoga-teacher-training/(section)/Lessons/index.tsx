'use client'

import Image from 'next/image'
import Container from '@/app/_components/Container'
import LessonItem from './LessonItem';
import { Section, Subtitle, ImageWrapper, Content, ContentSub, Title } from './styles'

const dataLearn = [
  {
    title: 'Techniques, Training and Practice',
    list: [
      'Asana Fundamentals',
      'Pranayamas - Breathing Techniques',
      'Kriyas',
      'Chanting & Music',
      'Sutras & Mantras from India',
      'Learn meditation from a monk',
      'Traditional yoga practises & techniques',
      'Analytical training in how to teach',
      'Guided practice of the techniques themselves'
    ],
  },
  {
    title: 'Teaching Methodology',
    list: [
      'Communication skills such as group dynamics, time management, and the establishment of priorities and boundaries',
      'How to address the specific needs of individuals and special populations, to the degree possible in a group setting',
      'Principles of demonstration, observation, assisting and correcting',
      'Teaching styles',
      'Qualities of a teacher',
      'The student learning process',
      'Business aspects of teaching yoga (including marketing and legal)',
    ],
  },
  {
    title: 'Anatomy and Physiology',
    list: [
      'Human physical anatomy and physiology (bodily systems, organs, etc.)',
      'Energy anatomy and physiology (chakras, nadis, etc.)',
      'Includes both the study of anatomy and physiology along with its application to yoga practice (benefits, contraindications, healthy movement patterns, etc.)',
    ],
  },
  {
    title: 'Yoga Philosophy, Lifestyle and Ethics',
    list: [
      'The study of yoga philosophies and traditional texts (such as the Yoga Sutras, Hatha Yoga Pradipika or Bhagavad Gita)',
      'Yoga lifestyle, such as the precept of non-violence (ahimsa), and the concepts of dharma and karma',
      'Ethics for yoga teachers, such as those involving teacher – student relationships and community',
      'Understanding the value of teaching yoga as a service and being of service to others through yoga (seva)'
    ],
  },
  {
    title: 'Practicum',
    list: [
      'Practice teaching (does not include assisting, observing or giving feedback)',
      'Receiving and giving feedback',
      'Observing others teaching',
      'Assisting students while someone else is teaching'
    ],
  },
]

export default function Lessons() {
  return (
    <Section>
      <Container>
        <Content>
          <div>
            <ImageWrapper>
              <Image
                src='/assets/images/gallery/training-12.jpg'
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
                {dataLearn.map(({title, list}, index) => {

                  return (
                    <LessonItem key={index} title={title} list={list}  />
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
