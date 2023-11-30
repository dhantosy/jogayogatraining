'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardMore, CardTitle, CardTop, ImageWrapper } from './styles'

type Props = {
  title: string;
  description: string;
  photo: string;
  link: string;
};

export default function CardBlog({ title, description, photo, link }: Props) {
  return (
    <Link href={link}>
      <Card>
        <CardTop>
          <ImageWrapper>
            <Image
              src={photo}
              alt={title}
              sizes={`100vw, 33vw`}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </ImageWrapper>
        </CardTop>
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <CardMore>Read More</CardMore>
        </CardContent>
      </Card>
    </Link>
  )
}
