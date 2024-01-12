'use client'

import Container from '@/app/_components/Container'
import { Section, Title, Subtitle, Button, Content } from './styles'
import Link from 'next/link'

export default function CTABottom() {
  return (
    <Section>
      <Container>
        <Content>
          <Title>
            Secure Your Spot Today!
          </Title>
          <Subtitle>
            Spaces are limited – reserve your spot now and embark on a life-changing experience!
          </Subtitle>
          <Link href='/register'>
            <Button>
              Apply Now
            </Button>
          </Link>
        </Content>
      </Container>
    </Section>
  )
}
