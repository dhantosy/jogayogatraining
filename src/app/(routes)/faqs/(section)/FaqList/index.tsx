'use client'

import Container from '@/app/_components/Container'
import { Section, Title, ContentWrapper, ContentNav } from './styles'
import FaqItem from './FaqItem'
import { faqCourses, faqGeneral, faqPricing } from '@/data/faqs'

export default function FaqList() {
  return (
    <Section>
      <Container>
        <ContentWrapper>
          <div>
            <ContentNav>
              <div>
                <a href='#courses'>Courses</a>
              </div>
              <div>
                <a href='#pricing-payments'>Pricing & Payments</a>
              </div>
              <div>
                <a href='#general'>General</a>
              </div>
            </ContentNav>
          </div>
          <div>
            <div className='content'>
              <div className='anchor' id='courses' />
              <Title>Courses</Title>
              <div>
                {faqCourses.map(({ title, description }) => {
                  return (
                    <FaqItem key={title} title={title} description={description} />
                  )
                })}
              </div>
            </div>
            <div className='content'>
              <div className='anchor' id='pricing-payments' />
              <Title>Pricing & Payments</Title>
              <div>
                {faqPricing.map(({ title, description }) => {
                  return (
                    <FaqItem key={title} title={title} description={description} />
                  )
                })}
              </div>
            </div>
            <div className='content'>
              <div className='anchor' id='general' />
              <Title>General</Title>
              <div>
                {faqGeneral.map(({ title, description }) => {
                  return (
                    <FaqItem key={title} title={title} description={description} />
                  )
                })}
              </div>
            </div>
          </div>
        </ContentWrapper>
      </Container>
    </Section>
  )
}
