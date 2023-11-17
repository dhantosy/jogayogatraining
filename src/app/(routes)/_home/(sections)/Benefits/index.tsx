'use client'

import Container from '@/app/_components/Container'
import { Section, Title, Subtitle, Heading, Content, ContentHeading, ContentItem } from './styles'

export default function Benefits() {
  return (
    <Section id='dive-courses'>
      <Container>
        <Heading>
          <Title>Your Best Decision Yet</Title>
          <Subtitle>We offer one of the best yoga training programs for three reasons.</Subtitle>
        </Heading>
        <Content>
          <ContentItem>
            <ContentHeading>
              <div className='number'>01.</div>
              <div>Organic Food</div>
            </ContentHeading>
            <div>We take pride in our healthy and delicious vegetarian & vegan menu. We make sure the food is sourced locally and organically grown. The food is based on an alkaline diet, staying away from most acidic food. We also cater for gluten free & lacto free diets upon request.</div>
          </ContentItem>
          <ContentItem>
            <ContentHeading>
              <div className='number'>02.</div>
              <div>Best Certified Yoga Teachers</div>
            </ContentHeading>
            <div>All teachers have their 200 RYT or 500 RYT from Yoga Alliance and have devoted their life to the practise of yoga on and off the mat. This training is catered for people of all levels who want to deepen their knowledge of yoga. Please see our 5 star reviews.</div>
          </ContentItem>
          <ContentItem>
            <ContentHeading>
              <div className='number'>03.</div>
              <div>Stunning Location</div>
            </ContentHeading>
            <div>Our location is in the heart of Canggu, only 5 minutes to the beach. We offer private, twin share and dorm. We have a big pool, yoga studio with a wooden floor, lots of plants and a beautiful surrounding! We have a vegan cafe area, free wifi, free clean drinking water and so much more.</div>
          </ContentItem>
        </Content>
      </Container>
    </Section>
  )
}
