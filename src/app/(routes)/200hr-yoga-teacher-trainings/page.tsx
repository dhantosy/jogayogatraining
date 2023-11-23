import HeroDetailPage from '@/app/_components/HeroDetailPage'
import Intro from './(section)/Intro'
import Meditation from './(section)/Meditation'
import Schedule from './(section)/Schedule'
import Lessons from './(section)/Lessons'
import Graduation from './(section)/Graduation'
import Form from './(section)/Form'
import Gallery from '@/app/_components/Gallery'
import TestimonialsSection from '@/app/_components/TestimonialsSection'
import { gallery } from '@/data/galleries'

export default function TeacherTrainingDetail() {
  return (
    <>
      <HeroDetailPage
        title='200 Hour Yoga Teacher Trainings'
        backgroundImage='/assets/images/gallery/training-9.jpg'
      />
      <Intro />
      <Meditation />
      <Schedule />
      <Lessons />
      <Graduation />
      <Form />
      <Gallery
        title='Our Past Teaching Moments'
        images={gallery}
      />
      <div style={{
        marginTop: '80px'
      }}>
        <TestimonialsSection />
      </div>
    </>
  )
}
