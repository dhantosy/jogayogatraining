'use client'

import Container from '@/app/_components/Container'
import FormFields from './FormFields';

import { Section } from './styles'

export default function Form() {

  return (
    <Section>
      <div id='register' />
      <Container>
        <FormFields />
      </Container>
    </Section>
  )
}
