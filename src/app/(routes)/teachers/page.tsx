import HeroDetailPage from '@/app/_components/HeroDetailPage'
import TestimonialsSection from '@/app/_components/TestimonialsSection'
import TeachersSection from './(section)/TeachersSection'
import TrainingsCallToAction from '@/app/_components/TrainingsCallToAction'
import ImageTeachers from 'public/assets/images/teachers.jpg'

export default function Teachers() {
  return (
    <>
      <HeroDetailPage
        title='Meet Our Teachers'
        backgroundImage={ImageTeachers}
      />
      <TeachersSection />
      <TrainingsCallToAction
        title='Explore Our Yoga Teacher Training'
        description={`Our training focuses on deepening one's understanding of yoga philosophy, asanas (postures), pranayama (breathing techniques), meditation, and teaching methodologies. It aims to empower aspiring yoga teachers to guide others on their journey towards physical, mental, and spiritual well-being.`}
        photo='/assets/images/gallery/training-2.jpg'
      />
      <div style={{
        marginTop: '40px'
      }}>
        <TestimonialsSection />
      </div>
    </>
  )
}
