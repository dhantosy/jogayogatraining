'use client'

import { useState } from 'react'
import Container from '@/app/_components/Container'
import FormFields from './FormFields'
import { Stepper, StepperItem, Title } from './styles'

type stepNumberProp = number;

export default function Register() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepChange = (data: stepNumberProp) => {
    setCurrentStep(data);
  }

  return (
    <div>
      <Title>
        <Container>
          <h1>Registration Form</h1>
          <p>You`re one step closer to become a certified yoga practitioner.</p>
          <Stepper>
            <StepperItem $currentStep={currentStep}>
              <div>1</div>
              <div>Personal Detail</div>
            </StepperItem>
            <StepperItem $currentStep={currentStep}>
              <div>2</div>
              <div>Additional Info</div>
            </StepperItem>
            <StepperItem $currentStep={currentStep}>
              <div>3</div>
              <div>Confirmation</div>
            </StepperItem>
            <StepperItem $currentStep={currentStep}>
              <div>4</div>
              <div>Reserve Spot</div>
            </StepperItem>
          </Stepper>
        </Container>
      </Title>
      <Container>
        <FormFields onStepChange={handleStepChange} />
      </Container>
    </div>
  )
}
