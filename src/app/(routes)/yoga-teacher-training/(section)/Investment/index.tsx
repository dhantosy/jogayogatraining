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
          <Title>Yoga Teacher Training Investment</Title>
        </Heading>
        <Content>
          <div className='left'>
            <div className='price-range'>
              <div>
                <div className='price-original'>Dorm Room</div>
                <div className='price-discount'>USD 1699</div>
              </div>
              <div>
                <div className='price-original'>Twin Share</div>
                <div className='price-discount'>USD 2450</div>
              </div>
              <div>
                <div className='price-original'>Private Room</div>
                <div className='price-discount'>USD 2999</div>
              </div>
            </div>
            <div className='left-content'>
              <div>USD 1000 Early Bird Discount</div>
              <div className='left-date'>
                <div className='left-date-item'>
                  <div className='left-date-icon'><HiCalendarDays /></div>
                  <div>1 - 22 July 2024</div>
                </div>
                <div className='left-date-item'>
                  <div className='left-date-icon'><HiCalendarDays /></div>
                  <div>5 - 26 August 2024</div>
                </div>
                <div className='left-date-item'>
                  <div className='left-date-icon'><HiCalendarDays /></div>
                  <div>2 - 23 September 2024</div>
                </div>
                <div className='left-date-item'>
                  <div className='left-date-icon'><HiCalendarDays /></div>
                  <div>1 - 22 October 2024</div>
                </div>
                <div className='left-date-item'>
                  <div className='left-date-icon'><HiCalendarDays /></div>
                  <div>4 - 24 November 2024</div>
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
                <div>Tuition with highly experienced and accredited yoga teachers</div>
              </div>
              <div className='list'>
                <div className='icon'><HiCheck /></div>
                <div>International Yoga Alliance Certified Certificate</div>
              </div>
              <div className='list'>
                <div className='icon'><HiCheck /></div>
                <div>Nutritious Vegetarian/Vegan Breakfasts and Lunches</div>
              </div>
              <div className='list'>
                <div className='icon'><HiCheck /></div>
                <div>All Books, Resources and t-shirt provided</div>
              </div>
              <div className='list'>
                <div className='icon'><HiCheck /></div>
                <div>Access to our online student portal upon completion</div>
              </div>
              <div className='list'>
                <div className='icon'><HiCheck /></div>
                <div>Free accommodation for the first 10 sign ups!</div>
              </div>
              <div className='list'>
                <div className='icon'><HiCheck /></div>
                <div>Bali excursion to sacred water temple and monks ashram</div>
              </div>
              <div className='list'>
                <div className='icon'><HiCheck /></div>
                <div>Airport pick up to location</div>
              </div>
              <div className='list'>
                <div className='icon'><HiCheck /></div>
                <div>Traditional Balinese Massage</div>
              </div>
            </div>
          </div>
        </Content>
      </Section>
    </Container>
  )
}
