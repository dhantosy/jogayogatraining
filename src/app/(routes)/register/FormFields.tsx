'use client'

import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { useForm, SubmitHandler } from 'react-hook-form'
import { HiCheckCircle } from 'react-icons/hi2'
import { Back, Form, FormState, Subtitle, SuccessMessage } from './styles'
import Loader from '@/app/_components/Loader'

type Inputs = {
  date: string;
  accomodation: string;
  fullname: string;
  email: string;
  phone: string;
  english: string;
  condition: string;
  source: string;
}

type stepNumberProp = number;

type Props = {
  onStepChange: (data: number) => void
};

const AppScriptUrl = 'https://script.google.com/macros/s/AKfycby0315coCywupSWzlTYg9XHTi6YlJFabwzyYEDM_ELPVOjXPg1hO8h3mBvWD2T-yn2I/exec';

export default function FormFields({ onStepChange }: Props) {
  const [isSafeToReset, setIsSafeToReset] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isDirty, isValid },
  } = useForm<Inputs>();
  const watchDate = watch('date', '');
  const watchAccomodation = watch('accomodation', '');
  const watchFullName = watch('fullname', '');
  const watchEmail = watch('email', '');
  const watchPhone = watch('phone', '');

  useEffect(() => {
    if (!isSafeToReset) return;

    reset(); // asynchronously reset your form values
  }, [isSafeToReset, reset]);

  const getFormData = (object: any) => {
    const formData = new FormData();
    formData.append('time', format(new Date(), 'yyyy MMMM dd, HH:mm'));
    Object.keys(object).forEach(key => formData.append(key, object[key]));

    return formData;
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);

    try {
      await fetch(AppScriptUrl, {
        redirect: 'follow',
        method: 'POST',
        body: getFormData(data),
      });
      setIsLoading(false);
      setIsSafeToReset(true);
      setCurrentStep(3);
      onStepChange(3);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  const handleStepChange = (stepNumber: stepNumberProp) => {
    setCurrentStep(stepNumber);
    onStepChange(stepNumber);
  };

  return (
    <Form>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <div className='formContent'>
            <div>
              <div>
                <FormState $currentStep={currentStep}>
                  <div>
                    <div className='formTop'>
                      <fieldset>
                        <label htmlFor='date'>Select your preferred date<span>*</span></label>
                        <div className='select'>
                          <select id='date' defaultValue='' {...register('date', {
                            required: true
                          })}>
                            <option value='' disabled>Please Select Date</option>
                            <option value='january'>8 January, 2024</option>
                            <option value='march'>4 March, 2024</option>
                            <option value='may'>6 May, 2024</option>
                          </select>
                        </div>
                      </fieldset>
                      <fieldset>
                        <label htmlFor='accomodation'>Select your accomodation<span>*</span></label>
                        <div className='select'>
                          <select id='accomodation' defaultValue='' {...register('accomodation', {
                            required: true
                          })}>
                            <option value='' disabled>Please Select Accomodation</option>
                            <option value='twin_shared'>Twin Shared</option>
                            <option value='private'>Private</option>
                            <option value='local'>Local Price Non Accomodation</option>
                          </select>
                        </div>
                      </fieldset>
                    </div>
                    <div>
                      <fieldset>
                        <label htmlFor='fullname'>Full Name<span>*</span></label>
                        <input type='text' id='fullname' {...register('fullname', {
                          required: true
                        })} />
                      </fieldset>
                      <fieldset>
                        <label htmlFor='email'>Email<span>*</span></label>
                        <input type='email' id='email' {...register('email', {
                          required: true
                        })} />
                      </fieldset>
                      <fieldset>
                        <label htmlFor='phone'>WhatsApp or Phone Number<span>*</span></label>
                        <input type='text' id='phone' {...register('phone', {
                          required: true
                        })} />
                      </fieldset>
                    </div>
                    <button type='button' onClick={() => handleStepChange(2)} className='submit' disabled={
                      watchDate === '' ||
                      watchAccomodation === '' ||
                      watchEmail === '' ||
                      watchFullName === '' ||
                      watchPhone === ''
                    }>Next</button>
                  </div>
                  <div>
                    <fieldset>
                      <label htmlFor='english'>What is your English proficiency?<span>*</span></label>
                      <div className='select'>
                        <select id='english' defaultValue='' {...register('english', {
                          required: true
                        })}>
                          <option value='' disabled>Please Select</option>
                          <option value='fluent'>Fluent</option>
                          <option value='conversational'>Conversational</option>
                          <option value='average'>Average</option>
                          <option value='needs_work'>Needs Work</option>
                        </select>
                      </div>
                    </fieldset>
                    <fieldset>
                      <label htmlFor='condition'>Do you have a medical condition or any current injuries?<span>*</span></label>
                      <textarea id='condition' {...register('condition', {
                        required: true
                      })} />
                    </fieldset>
                    <fieldset>
                      <label htmlFor='source'>How did you know about us?<span>*</span></label>
                      <div className='select'>
                        <select id='source' defaultValue='' {...register('source', {
                          required: true
                        })}>
                          <option value='' disabled>Please Select</option>
                          <option value='instagram'>Instagram</option>
                          <option value='facebook'>Facebook</option>
                          <option value='youtube'>Youtube</option>
                          <option value='google_search'>Google Search</option>
                          <option value='digital_ads'>Digital Ads</option>
                          <option value='referral'>Referral</option>
                        </select>
                      </div>
                    </fieldset>
                    <div style={{ textAlign: 'center' }}>
                      {isLoading ? <Loader /> : (
                        <>
                          <button type='submit' className='submit' disabled={!isDirty || !isValid}>Submit</button>
                          <Back onClick={() => handleStepChange(1)}>
                            Back to previous form
                          </Back>
                        </>
                      )}
                    </div>
                  </div>
                </FormState>
                <FormState $currentStep={currentStep}>
                  <SuccessMessage>
                    <div className='icon'>
                      <HiCheckCircle />
                    </div>
                    <div className='title'>Registration Successful!</div>
                    <div>We will get back to you within 24 hours.</div>
                    <div><strong>Please check your SPAM folder if you don’t see our reply email.</strong></div>
                    <div>
                      <Subtitle>
                        Secure your spot with a refundable deposit of <strong>AUD 300</strong>. Your deposit is fully refundable within 30 days.
                      </Subtitle>
                      <a className='submit' href='https://checkout.stripe.com/c/pay/cs_live_a1UJLawEfntfMHW9DlIwlpUVQsy9mGqtFRFqLYe6FdbWuzk2WodfsgpuUE#fidkdWxOYHwnPyd1blppbHNgWjR2TUFpM2N3Y2pBRmdjQj1RM1YxVUZQdScpJ3VpbGtuQH11anZgYUxhJz8nY19gYjdDNjFjME9OY0JqNz09J3gl' target='_blank'>
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
