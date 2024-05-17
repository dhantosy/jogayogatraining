'use client'

import Intro from './(section)/Intro'
import Meditation from './(section)/Meditation'
import Schedule from './(section)/Schedule'
import Lessons from './(section)/Lessons'
import Graduation from './(section)/Graduation'
import Investment from './(section)/Investment'
import CertificationDetail from './(section)/CertificationDetail'
import CTABottom from './(section)/CTABottom'
import Gallery from '@/app/_components/Gallery'
import Container from '@/app/_components/Container'
import NumbersSection from '@/app/_components/NumbersSection'
// import GalleryLocation from '@/app/_components/GalleryLocation'
import AccreditationSection from '@/app/_components/AccreditationSection'
import Teachers from '../_home/(sections)/Teachers'
import TestimonialsSection from '@/app/_components/TestimonialsSection'
import { galleryExcursion } from '@/data/galleries'

export default function YogaTeacherTraining() {
  return (
    <>
      <Intro />
      <AccreditationSection />
      <Meditation />
      <NumbersSection />
      <Lessons />
      <CertificationDetail />
      <Schedule />
      <Graduation />
      <Investment />
      <Gallery
        title=''
        subtitle='Embark on a profound journey of self-exploration and emotional healing. Engage in soulful practices such as journaling, meditation, yoga classes, ecstatic dance to foster a deeper connection with your authentic self. We take an excursion to Dada the monks ashram, then a secret Hindu water temple, waterfall and huge rice terrace.'
        images={galleryExcursion}
      />
      <Teachers />
      {/* <div style={{
        marginTop: '60px'
      }}>
        <GalleryLocation />
      </div> */}
      <div style={{ marginTop: '30px' }}>
        <Container>
          <TestimonialsSection />
        </Container>
        <CTABottom />
      </div>
    </>
  )
}
