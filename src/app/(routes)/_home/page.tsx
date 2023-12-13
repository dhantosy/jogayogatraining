import Hero from './(sections)/Hero'
import Benefits from './(sections)/Benefits'
import Teachers from './(sections)/Teachers'
import Trainings from './(sections)/Trainings'
import Journey from './(sections)/Journey'
import AccreditationSection from '@/app/_components/AccreditationSection'
import NumbersSection from '@/app/_components/NumbersSection'
import TestimonialsSection from '@/app/_components/TestimonialsSection'
import GalleryLocation from '@/app/_components/GalleryLocation'

export default function Home() {
  return (
    <>
      <Hero />
      <AccreditationSection />
      <NumbersSection />
      <Journey />
      <Trainings />
      <Benefits />
      <Teachers />
      <GalleryLocation />
      <TestimonialsSection />
    </>
  )
}
