'use client'

import Link from 'next/link'
import { HiArrowLongRight } from "react-icons/hi2"
import Container from '@/app/_components/Container'
import ProfileCard from '@/app/_components/ProfileCard'
import { Section, Title, Heading, Content, More, Icon } from './styles'
import { teachers } from '@/data/teachers'

export default function Teachers() {
  return (
    <Section>
      <Container>
        <Heading>
          <Title>Our Beautiful Yoga Teachers</Title>
          <Link href='/teachers'>
            <More>
              <div>See More Teachers</div>
              <Icon><HiArrowLongRight /></Icon>
            </More>
          </Link>
        </Heading>
        <Content>
          {teachers.slice(0, 4).map(({ name, photo }) => {
            return (
              <Link key={name} href='/teachers'>
                <ProfileCard name={name} photo={photo} onProfileClick={() => {}} />
              </Link>
            )
          })}
        </Content>
      </Container>
    </Section>
  )
}
