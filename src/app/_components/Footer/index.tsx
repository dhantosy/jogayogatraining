'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
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
  Address,
  Copyright,
  Info,
  InfoIcon,
  CopyrightSocial,
  CopyrightSocialItem
} from './styles'
import Container from '../Container'

const menu = [
  {
    title: 'Yoga Teacher Training',
    link: '/yoga-teacher-training',
  },
  {
    title: 'Teachers',
    link: '/teachers',
  },
  {
    title: 'Testimonials',
    link: '/testimonials',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Blog',
    link: '/blog',
  },
  {
    title: 'FAQs',
    link: '/faqs',
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
            {menu.map(({ title, link }) => {
              return (
                <div key={title}>
                  <Link href={link}>
                    <MenuTitle>{title}</MenuTitle>
                  </Link>
                </div>
              )
            })}
          </Menu>
        </Navigation>
        <Copyright>
          <CopyrightSocial>
            <a href='https://www.instagram.com/jogayogatraining/' target='_blank' aria-label='Joga Yoga Training Instagram'>
              <CopyrightSocialItem>
                <FaInstagram />
              </CopyrightSocialItem>
            </a>
            <a href='https://www.facebook.com/jogayogateacher/' target='_blank' aria-label='Joga Yoga Training Facebook'>
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
