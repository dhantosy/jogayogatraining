import Hero from './(sections)/Hero'
import Benefits from './(sections)/Benefits'
import Teachers from './(sections)/Teachers'
import Trainings from './(sections)/Trainings'
import Journey from './(sections)/Journey'
import AccreditationSection from '@/app/_components/AccreditationSection'
import NumbersSection from '@/app/_components/NumbersSection'
import TestimonialsSection from '@/app/_components/TestimonialsSection'
import GalleryLocation from '@/app/_components/GalleryLocation'
import Lessons from '@/app/(routes)/yoga-teacher-training/(section)/Lessons'
import CertificationDetail from '@/app/(routes)/yoga-teacher-training/(section)/CertificationDetail'
import Graduation from '@/app/(routes)/yoga-teacher-training/(section)/Graduation'
import Investment from '@/app/(routes)/yoga-teacher-training/(section)/Investment'

export default function Home() {
  return (
    <>
      <Hero />
      <AccreditationSection />
      <Journey />
      <NumbersSection />
      <Trainings />
      <Lessons />
      <CertificationDetail />
      <Graduation />
      <Benefits />
      <Investment />
      <Teachers />
      <GalleryLocation />
      <TestimonialsSection />
    </>
  )
}
