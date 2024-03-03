'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  FaRegEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookSquare,
  FaYoutube,
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
import { menusMain } from '@/data/menus'

export default function Footer() {
  return (
    <FooterNav>
      <Container>
        <Navigation>
          <NavRight>
            <Link href='/'>
              <Logo>
                <Image
                  src='/assets/images/logo-new.png'
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
                <a href='tel:+6281339850195'>+6281339850195</a>
              </Info>
            </div>
          </NavRight>
          <div className='featured'>
            <div>Featured On</div>
            <div>Honey combers</div>
            <div>Body Factory Bali</div>
            <div>Serenity Eco Guesthouse</div>
            <div><a href='https://www.yovada.com/yoga-teacher-training.html' target='_blank'>Yovada</a></div>
            <div>Coastline Yoga</div>
            <div>Women Fitness</div>
            <div>Yoga Alliance</div>
          </div>
          <Menu>
            {menusMain.map(({ title, link }) => {
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
            {/* <a href='https://www.facebook.com/jogayogateacher/' target='_blank' aria-label='Joga Yoga Training Facebook'>
              <CopyrightSocialItem>
                <FaTwitter />
              </CopyrightSocialItem>
            </a> */}
            <a href='https://www.youtube.com/@jogayogabali' target='_blank' aria-label='Joga Yoga Training Youtube'>
              <CopyrightSocialItem>
                <FaYoutube />
              </CopyrightSocialItem>
            </a>
          </CopyrightSocial>
          Joga Yoga Training © 2024. All Rights Reserved.
        </Copyright>
      </Container>
    </FooterNav>
  )
}
