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

const headerMenus = [
  {
    parent: 'Yoga Teacher Training',
    linkParent: '/yoga-teacher-training'
  },
  {
    parent: 'About',
    linkParent: '/about'
  },
  // {
  //   parent: 'Blog',
  //   linkParent: '/blog'
  // }
];

const headerMenusMobile = [
  {
    parent: 'Yoga Teacher Training',
    linkParent: '/yoga-teacher-training'
  },
  {
    parent: 'Teachers',
    linkParent: '/teachers'
  },
  {
    parent: 'Testimonials',
    linkParent: '/testimonials'
  },
  {
    parent: 'About',
    linkParent: '/about'
  },
  // {
  //   parent: 'Blog',
  //   linkParent: '/blog'
  // },
  {
    parent: 'FAQs',
    linkParent: '/faqs'
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
