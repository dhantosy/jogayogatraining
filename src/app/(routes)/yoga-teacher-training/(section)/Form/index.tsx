'use client'

import { HiMiniCheckBadge } from 'react-icons/hi2'
import Container from '@/app/_components/Container'
import FormFields from './FormFields';

import { Offer, OfferItem, Section } from './styles'

export default function Form() {

  return (
    <Section>
      <div className='anchor' id='register' />
      <Container>
        <Offer>
          <OfferItem>
            <div><HiMiniCheckBadge /></div>
            <div>
              Starts from <strong>USD 1999</strong>, or <strong>IDR 17jt</strong> for local Indonesians
            </div>
          </OfferItem>
          <OfferItem>
            <div><HiMiniCheckBadge /></div>
            <div>
              Early Bird Offer - <strong>20% Off</strong>!
            </div>
          </OfferItem>
        </Offer>
        <FormFields />
      </Container>
    </Section>
  )
}
