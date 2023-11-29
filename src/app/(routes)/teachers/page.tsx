import HeroDetailPage from '@/app/_components/HeroDetailPage'
import TestimonialsSection from '@/app/_components/TestimonialsSection'
import TeachersSection from './(section)/TeachersSection'

export default function Teachers() {
  return (
    <>
      <HeroDetailPage
        title='Meet Our Teachers'
        backgroundImage='/assets/images/teachers.jpg'
      />
      <TeachersSection />
      <div style={{
        marginTop: '80px'
      }}>
        <TestimonialsSection />
      </div>
    </>
  )
}
