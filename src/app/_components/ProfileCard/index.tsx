'use client'

import Image from 'next/image'
import { ContentItem, ImageWrapper, Name, ProfileCardItem } from './styles'

type Props = {
  name: string;
  description?: string;
  photo: string;
  onProfileClick: (param: Props) => void;
};

export default function ProfileCard(param: Props) {

  return (
    <ProfileCardItem onClick={() => param.onProfileClick(param)}>
      <ContentItem>
        <ImageWrapper className='image-wrapper'>
          <Image
            src={param.photo}
            alt={param.name}
            sizes={`100vw, 33vw`}
            width='300'
            height='423'
            className='photo'
          />
        </ImageWrapper>
        <Name>{param.name}</Name>
      </ContentItem>
    </ProfileCardItem>
  )
}
