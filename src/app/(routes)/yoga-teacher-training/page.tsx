'use client'

import Intro from './(section)/Intro'
import Meditation from './(section)/Meditation'
import Schedule from './(section)/Schedule'
import Lessons from './(section)/Lessons'
import Graduation from './(section)/Graduation'
import Investment from './(section)/Investment'
import Gallery from '@/app/_components/Gallery'
import NumbersSection from '@/app/_components/NumbersSection'
import GalleryLocation from '@/app/_components/GalleryLocation'
import AccreditationSection from '@/app/_components/AccreditationSection'
import VideoTestimonial from '../testimonials/(section)/Reviews/VideoTestimonial'
import { galleryExcursion } from '@/data/galleries'
import Container from '@/app/_components/Container'

export default function YogaTeacherTraining() {
  return (
    <>
      <Intro />
      <AccreditationSection />
      <Meditation />
      <NumbersSection />
      <Lessons />
      <Schedule />
      <Graduation />
      <Investment />
      <Gallery
        title=''
        subtitle='Embark on a profound journey of self-exploration and emotional healing practices such as journaling, and ecstatic dance to foster a deeper connection with your authentic self. We take an excursion to Dada the monks ashram, then a secret Hindu water temple, waterfall and huge rice terrace.'
        images={galleryExcursion}
      />
      <div style={{
        marginTop: '60px'
      }}>
        <GalleryLocation />
      </div>
      <Container>
        <VideoTestimonial />
      </Container>
    </>
  )
}
