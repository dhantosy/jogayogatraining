import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { useForm, SubmitHandler } from 'react-hook-form'
import Loader from '@/app/_components/Loader'
import { HiCheckCircle } from 'react-icons/hi2'
import { SuccessMessage } from './styles'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

const AppScriptUrl = 'https://script.google.com/macros/s/AKfycbzX1Ytplt_EDWddvFuqTxRv-pdS0tqq49-igcfWhDFBt6SF4lbVyapNQV0fZ0Ytzvpk/exec';

export default function FormField() {
  const [isSafeToReset, setIsSafeToReset] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = useForm<Inputs>();

  useEffect(() => {
    if (!isSafeToReset) return;

    reset(); // asynchronously reset your form values
  }, [isSafeToReset, reset]);

  const getFormData = (object:any) => {
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
      setIsSafeToReset(true);
      setIsLoading(false);
      setIsFormSubmitted(true);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  return (
    <form id='form-contact' onSubmit={handleSubmit(onSubmit)}>
      {isFormSubmitted ? (
        <SuccessMessage>
          <div className='icon'>
            <HiCheckCircle />
          </div>
          <div>
            <div className='title'>Thank you for submitting your message!</div>
            <div>Our team will get back to you as soon as possible.</div>
          </div>
        </SuccessMessage>
      ) : (
          <div>
            <fieldset>
              <label htmlFor='name'>Name<span>*</span></label>
              <input type='text' id='name' {...register('name', {
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
              <label htmlFor='subject'>Subject<span>*</span></label>
              <input type='text' id='subject' {...register('subject', {
                required: true
              })} />
            </fieldset>
            <fieldset>
              <label htmlFor='message'>Message<span>*</span></label>
              <textarea id='message' {...register('message', {
                required: true
              })} />
            </fieldset>
            <div style={{ textAlign: 'center' }}>
              {isLoading ? <Loader /> : <button type='submit' className='submit' disabled={!isDirty || !isValid}>Submit</button>}
            </div>
          </div>
      )}
    </form>
  )
}
