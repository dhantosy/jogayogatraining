'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { HiCheckCircle } from 'react-icons/hi2'
import { DiscountAmount, DiscountedPrice, Form, ImageWrapper, SuccessMessage, Summary, SummaryAmount, SummaryContent, SummaryDetail, SummaryInfo, SummaryPrice, SummaryTitle, Title } from './styles'

type Inputs = {
  date: string;
  accomodation: string;
  fullname: string;
  email: string;
  phone: string;
  english: string;
  condition: string;
}

export default function FormFields() {
  const pathname = usePathname();
  const [isDiscount, setIsDiscount] = useState(false);
  const [isSafeToReset, setIsSafeToReset] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    getValues,
    formState: { isDirty, isValid },
  } = useForm<Inputs>();
  const watchDate = watch('date', '');
  const watchAccomodation = watch('accomodation', '');

  useEffect(() => {
    setIsFormSubmitted(false);
  }, [pathname])

  useEffect(() => {
    if (!isSafeToReset) return;

    reset(); // asynchronously reset your form values
  }, [isSafeToReset, reset]);

  useEffect(() => {
    if (getValues('date') === 'may') {
      setIsDiscount(true);
    } else {
      setIsDiscount(false);
    }
  }, [getValues, watchDate]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await fetch('./api/formValues.json');
      setIsSafeToReset(true);
      setIsFormSubmitted(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Form>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isFormSubmitted ? (
          <SuccessMessage>
            <div className='icon'>
              <HiCheckCircle />
            </div>
            <div>
              <div className='title'>
                <div>Awesome!</div>
                You`re One Step Closer to Become a Certified Yoga Teacher!
              </div>
              <div>Our team will get back to you as soon as possible.</div>
            </div>
          </SuccessMessage>
        ) : (
            <div>
              <div>
                <Title>Let`s Begin Your Journey</Title>
                <div>Choose your preferred Date and Accomodation to see our offerings.</div>
              </div>
              <div className='formContent'>
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
                          <option value='may'>6 May, 2024 (Early Bird Discount)</option>
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
                          <option value='non_accomodation'>Non Accomodation</option>
                          <option value='dorm'>Dorm</option>
                          <option value='twin_shared'>Twin Shared</option>
                          <option value='private'>Private</option>
                          <option value='local'>Local Price Non Accomodation</option>
                        </select>
                      </div>
                    </fieldset>
                  </div>
                  <div className='formBottom'>
                    {(watchDate && watchAccomodation) && (
                      <div>
                        <div className='my-20'>Fill the rest of the form to secure your spot!</div>
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
                        <button type='submit' className='submit' disabled={!isDirty || !isValid}>Submit</button>
                      </div>
                    )}
                  </div>
                </div>
                <Summary>
                  {(watchDate && watchAccomodation) && (
                    <SummaryContent>
                      <SummaryTitle>Your Summary</SummaryTitle>
                      <SummaryDetail>
                        <SummaryInfo>
                          <div>Date</div>
                          <div>
                            {
                              getValues('date') === 'january' ? '8 January, 2024' :
                                getValues('date') === 'march' ? '4 March, 2024' :
                                  '6 May, 2024'
                            }
                          </div>
                        </SummaryInfo>
                        <SummaryInfo>
                          <div>Accomodation</div>
                          <div>
                            {
                              getValues('accomodation') === 'non_accomodation' ? 'Non Accomodation' :
                                getValues('accomodation') === 'dorm' ? 'Dorm' :
                                  getValues('accomodation') === 'twin_shared' ? 'Twin Shared' :
                                    getValues('accomodation') === 'private' ? 'Private' : 'Local Non Accomodation'
                            }
                          </div>
                        </SummaryInfo>
                        {
                          (getValues('accomodation') !== 'non_accomodation' && getValues('accomodation') !== 'local') && (
                            <ImageWrapper>
                              <Image
                                src={
                                  getValues('accomodation') === 'dorm' ? '/assets/images/dorm.jpg' :
                                    getValues('accomodation') === 'twin_shared' ? '/assets/images/twin.jpg' :
                                      getValues('accomodation') === 'private' ? '/assets/images/private.jpg' : '/assets/images/dorm.jpg'
                                }
                                alt='Joga Yoga Teacher Trainings'
                                sizes={`100vw, 33vw`}
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                              />
                            </ImageWrapper>
                          )
                        }
                        <SummaryInfo className='price'>
                          <SummaryPrice>Final Price</SummaryPrice>
                          <SummaryPrice>
                            <SummaryAmount $discount={isDiscount}>
                              {
                                getValues('accomodation') === 'non_accomodation' ? '$1999' :
                                  getValues('accomodation') === 'dorm' ? '$2380' :
                                    getValues('accomodation') === 'twin_shared' ? '$2850' :
                                      getValues('accomodation') === 'private' ? '$3850' : 'Rp17.000.000'
                              }
                            </SummaryAmount>
                            <DiscountAmount>
                              {
                                getValues('date') === 'may' ? 'Discount 20%' : ''
                              }
                            </DiscountAmount>
                            {getValues('date') === 'may' && (
                              <DiscountedPrice>
                                {
                                  getValues('accomodation') === 'non_accomodation' ? '$1599' :
                                    getValues('accomodation') === 'dorm' ? '$1904' :
                                      getValues('accomodation') === 'twin_shared' ? '$2280' :
                                        getValues('accomodation') === 'private' ? '$3080' : 'Rp13.600.000'
                                }
                              </DiscountedPrice>
                            )}
                          </SummaryPrice>
                        </SummaryInfo>
                      </SummaryDetail>
                    </SummaryContent>
                  )}
                </Summary>
              </div>
            </div>
        )}
      </form>
    </Form>
  )
}
