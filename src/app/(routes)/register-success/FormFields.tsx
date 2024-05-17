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
                <FormState $currentStep={2}>
                  <SuccessMessage>
                    <div className='icon'>
                      <HiCheckCircle />
                    </div>
                    <div className='title'>Registration Successful!</div>
                    <div>We will get back to you within 24 hours.</div>
                    <div><strong>Please check your SPAM folder if you don’t see our reply email.</strong></div>
                    <div>
                      <Subtitle>
                        Secure your spot with a refundable deposit of <strong>USD 300</strong>. Your deposit is fully refundable within 30 days.
                      </Subtitle>
                      <a className='submit' href='https://buy.stripe.com/8wM3fT8oz0pq1Py3cd' target='_blank'>
                        Pay a Deposit
                      </a>
                    </div>
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
