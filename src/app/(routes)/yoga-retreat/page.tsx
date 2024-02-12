'use client'

import Intro from './(section)/Intro'
import AboutRetreat from './(section)/AboutRetreat'
import Benefits from './(section)/Benefits'
import Schedule from './(section)/Schedule'
import Lessons from './(section)/Lessons'
import Graduation from './(section)/Graduation'
import Investment from './(section)/Investment'
import CTABottom from './(section)/CTABottom'
import Reviews from './(section)/Reviews'
import GalleryRetreat from '@/app/_components/GalleryRetreat'
import Teachers from '../_home/(sections)/Teachers'

export default function YogaRetreat() {
  return (
    <>
      <Intro />
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
