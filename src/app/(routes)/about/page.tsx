import HeroDetailPage from '@/app/_components/HeroDetailPage'
import Intro from './(section)/Intro'
import Gallery from '@/app/_components/Gallery'
import Community from './(section)/Community'
import Experience from './(section)/Experience'
import TrainingsCallToAction from '@/app/_components/TrainingsCallToAction'
import TestimonialsSection from '@/app/_components/TestimonialsSection'
import { galleryAbout } from '@/data/galleries'

export default function About() {
  return (
    <>
      <HeroDetailPage
        title='About Us'
        backgroundImage='/assets/images/about-us-1.jpg'
      />
      <Intro />
      <Community />
      <Experience />
      <Gallery
        title='Unforgettable Journey'
        images={galleryAbout}
      />
      <TrainingsCallToAction
        title='Intimate Yoga Teacher Training'
        description={`Our training focuses on deepening one's understanding of yoga philosophy, asanas (postures), pranayama (breathing techniques), meditation, and teaching methodologies. It aims to empower aspiring yoga teachers to guide others on their journey towards physical, mental, and spiritual well-being.`}
        photo='/assets/images/gallery/training-2.jpg'
      />
      <div style={{
        marginTop: '20px'
      }}>
        <TestimonialsSection />
      </div>
    </>
  )
}
