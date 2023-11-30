'use client'

import { useCallback, useState } from 'react'
import { HiMiniPlusSmall, HiMiniMinusSmall } from 'react-icons/hi2'
import { Icon, Item, ItemContent, ItemTitle } from './styles'

type Props = {
  title: string;
  description: string;
};

export default function FaqItem({ title, description }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <Item>
      <ItemTitle onClick={handleClick}>
        <div>{isOpen ? <Icon><HiMiniMinusSmall /></Icon> : <Icon><HiMiniPlusSmall /></Icon>}</div>
        <div>{title}</div>
      </ItemTitle>
      <ItemContent $isOpen={isOpen}>{description}</ItemContent>
    </Item>
  )
}
