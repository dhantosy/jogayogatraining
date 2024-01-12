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
  Icon,
  MobileMenuContainer,
} from './styles'
import { useScrollPosition}  from '@/hooks/useScrollPosition';
import MobileMenuItem from './MobileMenuItem'
import { menusMain, menusHeader } from '@/data/menus'

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
        {menusHeader.map(({ title, link }) => {

          return (
            <React.Fragment key={title}>
              <MenuItem className='desktop'>
                <Text>
                  <Link href={link}>
                    {title}
                  </Link>
                </Text>
              </MenuItem>
            </React.Fragment>
          )
        })}
        <div id='btn-apply-header' className='apply-btn'>
          <Link href='/register'>
            Apply Now
          </Link>
        </div>
        <Icon onClick={handleMobileMenuClick}>
          <HiBars3 />
        </Icon>
      </Menu>
    )
  };

  function HeaderItemMenuMobile() {

    return (
      <div>
        {menusMain.map(({ title, link }) => {

          return (
            <React.Fragment key={title}>
              <MobileMenuItem
                parent={title}
                linkParent={link}
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
            <Logo $active={active}>
              <Image
                src="/assets/images/logo-horizontal.png"
                alt="Joga yoga training"
                sizes={`100vw, 33vw`}
                priority
                width='200'
                height='90'
              />
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
