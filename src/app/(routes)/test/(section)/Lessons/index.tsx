'use client'

import Image from 'next/image'
import Container from '@/app/_components/Container'
import LessonItem from './LessonItem';
import { Section, Subtitle, ImageWrapper, Content, ContentSub, Title } from './styles'

const dataLearn = [
  {
    title: 'Day 1 - Immerse Yourself',
    list: [
      'Grounding practices',
      'Meditation with Dada the monk',
      'Gentle yoga session',
      'Sunset at the beach',
      'Sauna/cold plunge',
    ],
  },
  {
    title: 'Day 2 - Nourishing The Mind',
    list: [
      'Sunlight meditation session',
      'Mobility and endurance training',
      'Dive into an array of lectures, workshops and empowering seminars designed to expand your mental horizons',
      'Explore meditation and breathing techniques',
      'Mindfulness practices',
      'Enriching discussions to cultivate clarity, focus, and inner peace',
    ],
  },
  {
    title: 'Day 3 - Nurturing The Soul',
    list: [
      'Self-exploration and emotional healing',
      'Engage in soulful practices such as journaling and ecstatic dance to foster a deeper connection with your authentic self',
      'Excursion to a secret Hindu water temple, waterfall and huge rice terrace.',
    ],
  },
  {
    title: 'Day 4 - Renewing The Body',
    list: [
      'Morning sunrise beach walk',
      'Heart-opening yoga back bending workshop',
      'Restorative yoga nidra',
      'Sound healing and breath workshops',
      'Mental clarity and vitality',
      'Ice bath and traditional Balinese oil massage before sleep'
    ],
  },
  {
    title: 'Day 5 - Integration & Reflection',
    list: [
      'Integrate the lessons learned and experiences gained',
      'Reflect on your personal growth',
      'Share insights with fellow students',
      'Create a roadmap for continued self-care and spiritual growth'
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
                src='/assets/images/blog/soul-yoga.jpg'
                alt='YTT'
                sizes={`100vw, 33vw`}
                width='600'
                height='441'
              />
            </ImageWrapper>
          </div>
          <div>
            <ContentSub>
              <Title>All Inclusive Activities</Title>
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
