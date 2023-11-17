'use client'

import React from 'react'
import Link from 'next/link'

import {
  Text,
  MenuItem,
  TextMobile,
} from './styles'

type Props = {
  parent: string;
  linkParent: string;
};

export default function MobileMenuItem({ parent, linkParent }: Props) {

  return (
    <MenuItem>
      <Text className='mobileMenu'>
        <Link href={linkParent}>
          <TextMobile>
            {parent}
          </TextMobile>
        </Link>
      </Text>
    </MenuItem>
  )
}
