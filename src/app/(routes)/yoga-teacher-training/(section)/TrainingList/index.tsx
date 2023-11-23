'use client'

import Container from '@/app/_components/Container'
import CardInfoHorizontal from '@/app/_components/CardInfoHorizontal'
import trainings from '@/data/trainings'
import { Section, Title, ContentWrapper } from './styles'

export default function TrainingList() {
  return (
    <Section>
      <Container>
        <Title>Pick Your Training Date</Title>
        <ContentWrapper>
          {trainings.map(({ title, description, startDate, location, photo, link, discount, discountText }) => {

            return (
              <CardInfoHorizontal
                key={startDate}
                title={title}
                description={description}
                startDate={startDate}
                location={location}
                photo={photo}
                link={link}
                discount={discount}
                discountText={discountText}
              />
            )
          })}
        </ContentWrapper>
      </Container>
    </Section>
  )
}
