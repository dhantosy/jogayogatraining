'use client'

import Intro from './(section)/Intro'
import AboutRetreat from './(section)/AboutRetreat'
import Benefits from './(section)/Benefits'
import Schedule from './(section)/Schedule'
import Lessons from './(section)/Lessons'
import Graduation from './(section)/Graduation'
import Investment from './(section)/Investment'
import CTABottom from './(section)/CTABottom'
import Teachers from './(section)/Teachers'
import Reviews from './(section)/Reviews'
import SpecialGuest from './(section)/SpecialGuest'
import GalleryRetreat from '@/app/_components/GalleryRetreat'

export default function YogaRetreat() {
  return (
    <>
      <Intro />
      <SpecialGuest />
      <AboutRetreat />
      <Benefits />
      <Schedule />
      <Lessons />
      <Graduation />
      <Investment />
      <Teachers />
      <GalleryRetreat />
      <Reviews />
      <CTABottom />
    </>
  )
}
