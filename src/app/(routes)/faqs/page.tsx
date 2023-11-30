import HeroParentPage from '@/app/_components/HeroParentPage'
import FaqList from './(section)/FaqList'

export default function FaqPage() {
  return (
    <>
      <div className='mb-40'>
        <HeroParentPage
          title='FAQs'
          subtitle='Our compilation of commonly asked questions serve as a helpful resource for individuals seeking quick and accurate information on our services.'
          backgroundImage='/assets/images/gallery/gallery-6.jpg'
        />
        <FaqList />
      </div>
    </>
  )
}
