'use client'

import Container from '@/app/_components/Container'
import { Heading, Section, Subtitle, TableSchedule, TableScheduleItem, Title } from './styles'

export default function Schedule() {
  return (
    <Section>
      <Container>
        <Heading>
          <Title>Our Sample Daily Schedule</Title>
          <Subtitle>Every day at our YTT in Bali is an extraordinary experience. The program is structured to have a wonderful balance of yoga practice, alignment, anatomy, teaching methodology and philosophy.</Subtitle>
        </Heading>
        <TableSchedule>
          <TableScheduleItem>
            <div>7.00 – 7.30</div>
            <div>Chanting & Meditation</div>
          </TableScheduleItem>
          <TableScheduleItem>
            <div>7.30 – 9.00</div>
            <div>Morning Yoga Class</div>
          </TableScheduleItem>
          <TableScheduleItem>
            <div>9.00 – 10.30</div>
            <div>Vegetarian/Vegan Breakfast</div>
          </TableScheduleItem>
          <TableScheduleItem>
            <div>10.30 – 12.30</div>
            <div>Yoga Philosophy & Anatomy</div>
          </TableScheduleItem>
          <TableScheduleItem>
            <div>12.30 – 14.00</div>
            <div>Lunch & Free Time</div>
          </TableScheduleItem>
          <TableScheduleItem>
            <div>14.00 – 16.00</div>
            <div>Asana Lab/Sequencing</div>
          </TableScheduleItem>
          <TableScheduleItem>
            <div>16.00 – 17.00</div>
            <div>Strength, Mobility, Flexibility</div>
          </TableScheduleItem>
          <TableScheduleItem>
            <div>17.00 – 18.00</div>
            <div>Candle light Yin Yoga</div>
          </TableScheduleItem>
        </TableSchedule>
      </Container>
    </Section>
  )
}
