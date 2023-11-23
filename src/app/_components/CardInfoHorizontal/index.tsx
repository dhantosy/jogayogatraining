'use client'

import Image from 'next/image'
import Link from 'next/link'
import { HiCalendarDays, HiMapPin } from "react-icons/hi2";
import { CardHorizontal, CardHorizontalWrapper, ImageWrapper, CardHorizontalContent, CardHorizontalTitle, CardHorizontalDetail, CardHorizontalDescription, Icon, Button, Discount } from './styles'

type Props = {
  title: string;
  description: string;
  startDate: string;
  location: string;
  photo: string;
  discount: boolean;
  discountText: string;
  link: string;
};

export default function CardInfoHorizontal({ title, description, startDate, location, photo, link, discount, discountText }: Props) {
  return (
    <CardHorizontal>
      <CardHorizontalWrapper>
        <ImageWrapper>
          {discount && (
            <Discount>
              {discountText}
            </Discount>
          )}
          <Image
            src={photo}
            alt={title}
            sizes={`100vw, 33vw`}
            fill
            style={{ objectFit: 'cover' }}
          />
        </ImageWrapper>
        <CardHorizontalContent>
          <CardHorizontalTitle>{title}</CardHorizontalTitle>
          <CardHorizontalDetail>
            <div className='flex'>
              <Icon><HiCalendarDays /></Icon>
              <div>{startDate}</div>
            </div>
            <div className='flex'>
              <Icon><HiMapPin /></Icon>
              <div>{location}</div>
            </div>
          </CardHorizontalDetail>
          <CardHorizontalDescription>{description}</CardHorizontalDescription>
          <Link href={link} className='link'>
            <Button>Learn More</Button>
          </Link>
        </CardHorizontalContent>
      </CardHorizontalWrapper>
    </CardHorizontal>
  )
}
