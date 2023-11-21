'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  FaArrowRight,
  FaRegEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookSquare
} from 'react-icons/fa'
import {
  Navigation,
  Logo,
  FooterNav,
  NavRight,
  Menu,
  MenuTitle,
  MenuItem,
  Address,
  Copyright,
  Info,
  InfoIcon,
  CopyrightSocial,
  CopyrightSocialItem
} from './styles'
import Container from '../Container'

const photos = [
  '/assets/images/gallery-2.jpg',
  '/assets/images/gallery-5.jpg',
  '/assets/images/gallery-1.jpg',
  '/assets/images/gallery-3.jpg',
  '/assets/images/gallery-4.jpg',
  '/assets/images/gallery-6.jpg',
];

const menu = [
  {
    title: 'Yoga Teacher Training',
  },
  {
    title: 'Teachers',
  },
  {
    title: 'Testimonials',
  },
  {
    title: 'About',
  },
  {
    title: 'Blog',
  },
  {
    title: 'FAQs',
  },
];

export default function Footer() {
  return (
    <FooterNav>
      <Container>
        <Navigation>
          <NavRight>
            <Link href='/'>
              <Logo>
                <Image
                  src='/assets/images/logo.png'
                  alt='Joga Yoga'
                  sizes={`100vw, 33vw`}
                  width='150'
                  height='150'
                />
              </Logo>
            </Link>
            <div>
              <Info>
                <InfoIcon><FaMapMarkerAlt /></InfoIcon>
                <Address>
                  Jl. Nelayan Canggu, Canggu, Kec. Kuta Utara, Kabupaten Badung, Bali 80361
                </Address>
              </Info>
              <Info>
                <InfoIcon><FaRegEnvelope /></InfoIcon>
                <a href='mailto:info@jogayogatraining.com'>info@jogayogatraining.com</a>
              </Info>
              <Info>
                <InfoIcon><FaPhoneAlt /></InfoIcon>
                <a href='tel:+6282235386290'>+62 822 3538 6290</a>
              </Info>
            </div>
          </NavRight>
          <Menu>
            {menu.map(({ title }) => {
              return (
                <div key={title}>
                  <MenuTitle>{title}</MenuTitle>
                </div>
              )
            })}
          </Menu>
        </Navigation>
        <Copyright>
          <CopyrightSocial>
            <a href='https://www.instagram.com/balistingray/' target='_blank' aria-label='Bali Stingray Divers Instagram'>
              <CopyrightSocialItem>
                <FaInstagram />
              </CopyrightSocialItem>
            </a>
            <a href='https://www.facebook.com/stingraydiversbali' target='_blank' aria-label='Bali Stingray Divers Facebook'>
              <CopyrightSocialItem>
                <FaFacebookSquare />
              </CopyrightSocialItem>
            </a>
          </CopyrightSocial>
          Joga Yoga Training © 2023. All Rights Reserved.
        </Copyright>
      </Container>
    </FooterNav>
  )
}
