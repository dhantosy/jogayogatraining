import { useState, useEffect } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { HiCheckCircle } from "react-icons/hi2"
import { SuccessMessage } from './styles'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

export default function FormField() {
  const [isSafeToReset, setIsSafeToReset] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
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

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await fetch(`https://docs.google.com/forms/d/e/1FAIpQLSc_1vQg9a1RBCM-OOkVf75Afj-mpaRnpuiBdUi6MSso3SuSQQ/formResponse?&submit=Submit?usp=pp_url&entry.2100670051=${data.name}&entry.185455459=${data.email}&entry.1954859216=${data.subject}&entry.1823720354=${data.message}`);
      setIsSafeToReset(true);
      setIsFormSubmitted(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isFormSubmitted ? (
        <SuccessMessage>
          <div className="icon">
            <HiCheckCircle />
          </div>
          <div>
            <div className="title">Thank you for submitting your message!</div>
            <div>Our team will get back to you as soon as possible.</div>
          </div>
        </SuccessMessage>
      ) : (
          <div>
            <fieldset>
              <label htmlFor='name'>Name<span>*</span></label>
              <input type='text' id='name' {...register("name", {
                required: true
              })} />
            </fieldset>
            <fieldset>
              <label htmlFor='email'>Email<span>*</span></label>
              <input type='email' id='email' {...register("email", {
                required: true
              })} />
            </fieldset>
            <fieldset>
              <label htmlFor='subject'>Subject<span>*</span></label>
              <input type='text' id='subject' {...register("subject", {
                required: true
              })} />
            </fieldset>
            <fieldset>
              <label htmlFor='message'>Message<span>*</span></label>
              <textarea id="message" {...register("message", {
                required: true
              })} />
            </fieldset>
            <button type='submit' className='submit' disabled={!isDirty || !isValid}>Submit</button>
          </div>
      )}
    </form>
  )
}
