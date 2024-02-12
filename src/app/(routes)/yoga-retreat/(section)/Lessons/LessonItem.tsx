'use client'

import { useCallback, useState } from 'react'
import { HiCheck, HiMiniPlusSmall, HiMiniMinusSmall } from 'react-icons/hi2'
import { Icon, Item, ItemContent, ItemDetail, ItemTitle } from './styles'

type Props = {
  title: string;
  list: string[];
};

export default function LessonItem({ title, list }: Props) {
  const [isOpen, setIsOpen] = useState(title === 'Day 1 - Immerse Yourself' ? true : false);

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <Item>
      <ItemTitle onClick={handleClick}>
        <div>{isOpen ? <Icon><HiMiniMinusSmall /></Icon> : <Icon><HiMiniPlusSmall /></Icon>}</div>
        <div>{title}</div>
      </ItemTitle>
      <ItemContent $isOpen={isOpen}>
        {list.map((data) => {
          return (
            <ItemDetail key={data}>
              <div><HiCheck /></div>
              <div>{data}</div>
            </ItemDetail>
          )
        })}
      </ItemContent>
    </Item>
  )
}
