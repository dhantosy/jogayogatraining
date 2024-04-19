import HeroDetailPage from '@/app/_components/HeroDetailPage'
import Reviews from './(section)/Reviews'
import TrainingsCallToAction from '@/app/_components/TrainingsCallToAction'
import ImageTraining from 'public/assets/images/gallery/training-8.jpg'

export default function Testimonials() {
  return (
    <>
      <HeroDetailPage
        title='Our Testimonials'
        backgroundImage={ImageTraining}
      />
      <Reviews />
      <TrainingsCallToAction
        title='Explore Our Yoga Teacher Training'
        description={`Our training focuses on deepening one's understanding of yoga philosophy, asanas (postures), pranayama (breathing techniques), meditation, and teaching methodologies. It aims to empower aspiring yoga teachers to guide others on their journey towards physical, mental, and spiritual well-being.`}
        photo='/assets/images/gallery/training-2.jpg'
      />
    </>
  )
}
