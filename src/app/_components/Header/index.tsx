'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiBars3 } from 'react-icons/hi2';

import {
  Navigation,
  HeaderContainer,
  Text,
  Logo,
  HeaderNav,
  Menu,
  MenuItem,
  Dropdown,
  DropdownText,
  TextHasDropdown,
  Icon,
  MobileMenuContainer,
  LogoName,
} from './styles'
import { useScrollPosition}  from '@/hooks/useScrollPosition';
import MobileMenuItem from './MobileMenuItem'

const headerMenus = [
  {
    parent: 'Yoga Teacher Training',
    linkParent: '/beyond-bali'
  },
  {
    parent: 'About',
    linkParent: '/beyond-bali'
  }
];

const headerMenusMobile = [
  {
    parent: 'Yoga Teacher Training',
    linkParent: '/beyond-bali'
  },
  {
    parent: 'Teachers',
    linkParent: '/beyond-bali'
  },
  {
    parent: 'Testimonials',
    linkParent: '/beyond-bali'
  },
  {
    parent: 'About',
    linkParent: '/beyond-bali'
  },
  {
    parent: 'Blog',
    linkParent: '/beyond-bali'
  },
  {
    parent: 'FAQs',
    linkParent: '/beyond-bali'
  }
]

export default function Header() {
  const pathname = usePathname();
  const scrollPosition = useScrollPosition();
  const [active, setActive] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  useEffect(() => {
    if (active) {
      if (scrollPosition < 101) setActive(false);
    } else {
      if (scrollPosition >= 100) setActive(true);
    }
  }, [active, scrollPosition]);

  const handleMobileMenuClick = useCallback(() => {
    setMobileMenuActive(!mobileMenuActive);
  }, [mobileMenuActive]);

  useEffect(() => {
    setMobileMenuActive(false);
  }, [pathname])

  function HeaderItemMenuDesktop() {
    return (
      <Menu>
        {headerMenus.map(({ parent, linkParent }) => {

          return (
            <React.Fragment key={parent}>
              <MenuItem className='desktop'>
                <Text>
                  <Link href={linkParent}>
                    {parent}
                  </Link>
                </Text>
              </MenuItem>
            </React.Fragment>
          )
        })}
        <Icon onClick={handleMobileMenuClick}>
          <HiBars3 />
        </Icon>
      </Menu>
    )
  };

  function HeaderItemMenuMobile() {

    return (
      <div>
        {headerMenusMobile.map(({ parent, linkParent }) => {

          return (
            <React.Fragment key={parent}>
              <MobileMenuItem
                parent={parent}
                linkParent={linkParent}
              />
            </React.Fragment>
          )
        })}
      </div>
    )
  };

  return (
    <HeaderNav $active={active}>
      <HeaderContainer>
        <Navigation>
          <Link href='/'>
            <Logo $active={active} className='desktop'>
              <Image
                src="/assets/images/logo.png"
                alt="Bali Stingray Diver"
                sizes={`100vw, 33vw`}
                priority
                width='100'
                height='100'
              />
            </Logo>
            <Logo className='mobile'>
              {/* <Image
                src="/assets/images/logo-black.png"
                alt="Bali Stingray Diver"
                sizes={`100vw, 33vw`}
                priority
                width='50'
                height='50'
              /> */}
              <LogoName>Joga Yoga Training</LogoName>
            </Logo>
          </Link>
          <Menu>
            {HeaderItemMenuDesktop()}
            <MobileMenuContainer $isMobileMenuActive={mobileMenuActive}>
              {HeaderItemMenuMobile()}
            </MobileMenuContainer>
          </Menu>
        </Navigation>
      </HeaderContainer>
    </HeaderNav>
  )
}
