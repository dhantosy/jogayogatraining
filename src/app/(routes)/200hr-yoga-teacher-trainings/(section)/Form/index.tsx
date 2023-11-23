'use client'

import { useState, useEffect } from 'react'
import Container from '@/app/_components/Container'
import FormFields from './FormFields';

import { Section } from './styles'

export default function Form() {

  return (
    <Section>
      <Container>
        <FormFields />
      </Container>
    </Section>
  )
}
