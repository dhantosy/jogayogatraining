import HeroParentPage from '@/app/_components/HeroParentPage'
import TrainingList from './(section)/TrainingList'
import Gallery from '@/app/_components/Gallery'
import TestimonialsSection from '@/app/_components/TestimonialsSection'
import { gallery } from '@/data/galleries'

export default function YogaTeacherTraining() {
  return (
    <>
      <div className='mb-40'>
        <HeroParentPage
          title='Yoga Teacher Training'
          subtitle='JOGA YOGA welcomes you to our yoga alliance certified 200 hour Yoga Teacher Training! We are a team of experienced local & International teachers who will guide you through this amazing experience. The venue is absolutely beautiful, a yoga studio walking distance from the beach!'
          backgroundImage='/assets/images/gallery/training-1.jpg'
        />
      </div>
      <Gallery
        title='Teacher Training Moments'
        images={gallery}
      />
      <TrainingList />
      <TestimonialsSection />
    </>
  )
}
