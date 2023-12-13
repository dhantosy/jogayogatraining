'use client'

import Container from '@/app/_components/Container'
import { PiCertificateBold } from "react-icons/pi";
import { GrYoga } from 'react-icons/gr';
import { FaStar } from 'react-icons/fa6';
import { Section, Title, Heading, Content, ContentHeading, ContentItem, Icon } from './styles'

export default function NumbersSection() {
  return (
    <Section>
      <Container>
        <Heading>
          <Title>We`re not just a school, but also a community of friends and family in Bali since 2017</Title>
        </Heading>
        <Content>
          <ContentItem>
            <ContentHeading>
              <Icon>
                <PiCertificateBold />
              </Icon>
              <div>
                <div className='subheading'>2000+</div>
                <div className='text'>Graduated YTT Students</div>
              </div>
            </ContentHeading>
          </ContentItem>
          <ContentItem>
            <ContentHeading>
              <Icon>
                <GrYoga />
              </Icon>
              <div>
                <div className='subheading'>50%</div>
                <div className='text'>of our students do YTT for self development</div>
              </div>
            </ContentHeading>
          </ContentItem>
          <ContentItem>
            <ContentHeading>
              <Icon>
                <FaStar />
              </Icon>
              <div>
                <div className='subheading'>4.6+</div>
                <div className='text'>Reviews on Google & Yoga Alliance</div>
              </div>
            </ContentHeading>
          </ContentItem>
        </Content>
      </Container>
    </Section>
  )
}