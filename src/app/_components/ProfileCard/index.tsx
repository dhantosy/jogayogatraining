'use client'

import Image from 'next/image'
import { ContentItem, ImageWrapper, Name, ProfileCardItem, Title } from './styles'

type Props = {
  name: string;
  description?: string;
  photo: string;
  title?: string;
  onProfileClick?: (param: Props) => void;
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
            fill
            style={{ objectFit: 'cover' }}
            className='photo'
          />
        </ImageWrapper>
        <Name>{param.name}</Name>
        {param.title && (
          <Title>{param.title}</Title>
        )}
      </ContentItem>
    </ProfileCardItem>
  )
}
