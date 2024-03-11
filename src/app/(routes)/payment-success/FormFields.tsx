'use client'

import { HiCheckCircle } from 'react-icons/hi2'
import { Back, Form, FormState, Subtitle, SuccessMessage } from './styles'

type Props = {
  onStepChange: (data: number) => void
};

export default function FormFields({ onStepChange }: Props) {

  return (
    <Form>
      <form noValidate>
        <div>
          <div className='formContent'>
            <div>
              <div>
                <FormState $currentStep={3}>
                  <SuccessMessage>
                    <div className='icon'>
                      <HiCheckCircle />
                    </div>
                    <div className='title'>Payment Successful!</div>
                    <div>Thank you for your deposit payment, we will secure your spot with us. We are looking forward to your arrival!</div>
                  </SuccessMessage>
                </FormState>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Form>
  )
}
