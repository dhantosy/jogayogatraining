import HeroDetailPage from '@/app/_components/HeroDetailPage'
import Intro from './(section)/Intro'
import Gallery from '@/app/_components/Gallery'
import Community from './(section)/Community'
import Experience from './(section)/Experience'
import Courses from './(section)/Courses'
import TestimonialsSection from '@/app/_components/TestimonialsSection'
import { galleryAbout } from '@/data/galleries'

export default function About() {
  return (
    <>
      <HeroDetailPage
        title='About Us'
        backgroundImage='/assets/images/about.jpg'
      />
      <Intro />
      <Community />
      <Experience />
      <Gallery
        title='Unforgettable Journey'
        images={galleryAbout}
      />
      <Courses />
      <div style={{
        marginTop: '80px'
      }}>
        <TestimonialsSection />
      </div>
    </>
  )
}
