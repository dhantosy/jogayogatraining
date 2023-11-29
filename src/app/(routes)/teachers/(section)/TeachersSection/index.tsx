'use client'

import { useState } from 'react'
import { HiMiniXCircle } from 'react-icons/hi2'
import Container from '@/app/_components/Container'
import ProfileCard from '@/app/_components/ProfileCard'
import { Icon, PopUpContainerInner, PopUpContainerOuter, PopUpContainerOverlay, PopUpContent, PopUpContentDesc, PopUpContentName, ProfileContainer, Section } from './styles'
import { teachers } from '@/data/teachers'

type Props = {
  name: string;
  description?: string;
  photo: string;
  onProfileClick: (param: Props) => void;
};

export default function TeachersSection() {
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
    <Container>
      <Section>
        <ProfileContainer>
          {teachers.slice(0, 4).map(({ name, description, photo }) => {
            return (
              <ProfileCard key={name} name={name} description={description} photo={photo} onProfileClick={handleClick} />
            )
          })}
        </ProfileContainer>
        <ProfileContainer>
          {teachers.slice(4, 7).map(({ name, description, photo }) => {
            return (
              <ProfileCard key={name} name={name} description={description} photo={photo} onProfileClick={handleClick} />
            )
          })}
        </ProfileContainer>
        {isActive && (
          <PopUpContainerOuter>
            <PopUpContainerOverlay onClick={() => setIsActive(false)} />
            <PopUpContainerInner>
              <PopUpContent>
                <Icon onClick={() => setIsActive(false)}>
                  <HiMiniXCircle />
                </Icon>
                <PopUpContentName>{activeProfile.name}</PopUpContentName>
                <PopUpContentDesc>{activeProfile.description}</PopUpContentDesc>
              </PopUpContent>
            </PopUpContainerInner>
          </PopUpContainerOuter>
        )}
      </Section>
    </Container>
  )
}
