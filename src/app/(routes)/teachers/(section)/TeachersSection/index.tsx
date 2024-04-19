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
};

export default function TeachersSection() {

  return (
    <Container>
      <Section>
        <ProfileContainer>
          {teachers.map(({ name, description, photo, title }) => {
            return (
              <div key={name}>
                <ProfileCard name={name} description={description} photo={photo.src} onProfileClick={() => {}} />
                <div className='subtitle'>{title}</div>
                <div className='desc'>{description}</div>
              </div>
            )
          })}
        </ProfileContainer>
      </Section>
    </Container>
  )
}
