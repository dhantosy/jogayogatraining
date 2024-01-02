'use client'

import { VideoItem, VideoSection, Heading } from './styles'

export default function VideoTestimonial() {
  return (
    <>
      <Heading>Interviews with the Students</Heading>
      <VideoSection>
        <div>
          <VideoItem>
            <iframe src="https://www.youtube.com/embed/_oEsunZAzRg" title="Empowered by Knowledge: My Joga Yoga Teacher Training Review" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope"></iframe>
          </VideoItem>
          <VideoItem>
            <div />
            <iframe src="https://www.youtube.com/embed/_Hp0SQpxgYg" title="Unveiling My Yoga Teacher Training Experience" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </VideoItem>
          <VideoItem>
            <div />
            <iframe src="https://www.youtube.com/embed/xVW0hEQw6q4" title="How our last day of YTT looks like" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </VideoItem>
          <VideoItem>
            <div />
            <iframe src="https://www.youtube.com/embed/g5TnhzXnWig" title="Ratna Shows Her True Experience On The 200 Hour Joga Yoga Teacher Training In Bali" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </VideoItem>
        </div>
      </VideoSection>
    </>
  )
}
