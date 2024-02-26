'use client'

import Link from 'next/link'
import { HiCalendarDays, HiCheck } from 'react-icons/hi2'
import Container from '@/app/_components/Container'
import { Section, Title, Heading, Content } from './styles'

export default function Investment() {
  return (
    <Container>
      <Section>
        <Heading>
          <Title>Mind - Body - Soul Retreat Investment</Title>
        </Heading>
        <Content>
          <div className='left'>
            <div>
              <div className='price-original'>USD 2399</div>
              <div className='price-discount'>USD 1699</div>
            </div>
            <div className='left-content'>
              <div className='left-date'>
                <div>Early Bird Price - USD 700 OFF</div>
                <div className='left-date-item'>
                  <div className='left-date-icon'><HiCalendarDays /></div>
                  <div>March 28th - April 2nd, 2024</div>
                </div>
              </div>
            </div>
            <Link href='/register'>
              <div id='btn-apply' className='btn'>Apply Now</div>
            </Link>
          </div>
          <div>
            <div className='list-title'>What`s included:</div>
            <div>
              <div className='list'>
                <div className='icon'><HiCheck /></div>
                <div>Tuition with experienced teachers in an intimate small-class setting</div>
              </div>
              <div className='list'>
                <div className='icon'><HiCheck /></div>
                <div>All course material & books included</div>
              </div>
              <div className='list'>
                <div className='icon'><HiCheck /></div>
                <div>Nutritious & Healthy food provided</div>
              </div>
              <div className='list'>
                <div className='icon'><HiCheck /></div>
                <div>Excursions around Bali</div>
              </div>
              <div className='list'>
                <div className='icon'><HiCheck /></div>
                <div><strong>FREE accommodation!</strong></div>
              </div>
            </div>
          </div>
        </Content>
      </Section>
    </Container>
  )
}
