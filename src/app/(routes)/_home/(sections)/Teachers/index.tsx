'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HiArrowLongRight, HiMiniXCircle } from "react-icons/hi2"
import Container from '@/app/_components/Container'
import ProfileCard from '@/app/_components/ProfileCard'
import { Section, Title, Heading, Content, More, Icon, IconClose } from './styles'
import { teachers } from '@/data/teachers'
import { PopUpContainerOuter, PopUpContainerOverlay, PopUpContainerInner, PopUpContent, PopUpContentName, PopUpContentDesc } from '@/app/(routes)/teachers/(section)/TeachersSection/styles'

type Props = {
  name: string;
  description?: string;
  photo: string;
  onProfileClick: (param: Props) => void;
};

export default function Teachers() {
  const [isActive, setIsActive] = useState(false);
  const [activeProfile, setActiveProfile] = useState({
    name: '',
    description: '',
  })

  const handleClick = (param: Props) => {
    setActiveProfile({
      name: param.name,
      description: param?.description || '',
    });
    setIsActive(true);
  }

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
          {teachers.slice(0, 4).map(({ name, description, photo }) => {
            return (
              <ProfileCard key={name} name={name} description={description} photo={photo} onProfileClick={handleClick} />
            )
          })}
        </Content>
      </Container>
      {isActive && (
        <PopUpContainerOuter>
          <PopUpContainerOverlay onClick={() => setIsActive(false)} />
          <PopUpContainerInner>
            <PopUpContent>
              <IconClose onClick={() => setIsActive(false)}>
                <HiMiniXCircle />
              </IconClose>
              <PopUpContentName>{activeProfile.name}</PopUpContentName>
              <PopUpContentDesc>{activeProfile.description}</PopUpContentDesc>
            </PopUpContent>
          </PopUpContainerInner>
        </PopUpContainerOuter>
      )}
    </Section>
  )
}
