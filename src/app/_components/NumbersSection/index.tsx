'use client'

import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });
import Container from '@/app/_components/Container'
import { PiCertificateBold } from "react-icons/pi";
import { GrYoga } from 'react-icons/gr';
import { FaStar } from 'react-icons/fa6';
import { Section, Title, Heading, Content, ContentHeading, ContentItem, Icon, VideoWrapper, VideoContent } from './styles'
import ImageVideoOne from 'public/assets/images/video-image-1.png'
import ImageVideoTwo from 'public/assets/images/video-image-2.png'

export default function NumbersSection() {
  const [videoOneLoad, setVideoOneLoad] = useState(false)
  const [videoTwoLoad, setVideoTwoLoad] = useState(false)

  return (
    <Section>
      <Container>
        <Heading>
          <Title>We`re not just a school, but also a community of friends and family in Bali since 2017</Title>
        </Heading>
        <Content>
          <ContentItem>
            <ContentHeading>
              <Icon>
                <PiCertificateBold />
              </Icon>
              <div>
                <div className='subheading'>2000+</div>
                <div className='text'>Graduated YTT Students</div>
              </div>
            </ContentHeading>
          </ContentItem>
          <ContentItem>
            <ContentHeading>
              <Icon>
                <GrYoga />
              </Icon>
              <div>
                <div className='subheading'>50%</div>
                <div className='text'>of our students do YTT for self development</div>
              </div>
            </ContentHeading>
          </ContentItem>
          <ContentItem>
            <ContentHeading>
              <Icon>
                <FaStar />
              </Icon>
              <div>
                <div className='subheading'>4.6+</div>
                <div className='text'>Reviews on Google & Yoga Alliance</div>
              </div>
            </ContentHeading>
          </ContentItem>
        </Content>
        <VideoContent>
          <VideoWrapper>
            <div className='player-wrapper'>
              {!videoOneLoad ? (
                <div onClick={() => setVideoOneLoad(true)}>
                  <Image
                    src={ImageVideoOne.src}
                    placeholder='blur'
                    blurDataURL={ImageVideoOne.blurDataURL}
                    alt='YTT'
                    sizes={`100vw, 33vw`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className='image'
                  />
                </div>
              ) : (
                <ReactPlayer
                  url='https://www.youtube.com/watch?v=EyMeJcJyGKk'
                  className='react-player'
                  width='100%'
                  height='100%'
                  config={{
                    youtube: {
                      playerVars: {
                        autoplay: 1
                      }
                    }
                  }}
                />
              )}
            </div>
          </VideoWrapper>
          <VideoWrapper>
            <div className='player-wrapper'>
              {!videoTwoLoad ? (
                <div onClick={() => setVideoTwoLoad(true)}>
                  <Image
                    src={ImageVideoTwo.src}
                    placeholder='blur'
                    blurDataURL={ImageVideoTwo.blurDataURL}
                    alt='YTT'
                    sizes={`100vw, 33vw`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className='image'
                  />
                </div>
              ) : (
                <ReactPlayer
                  url='https://www.youtube.com/watch?v=IOnxrTPBktY'
                  className='react-player'
                  width='100%'
                  height='100%'
                    config={{
                      youtube: {
                        playerVars: {
                          autoplay: 1
                        }
                      }
                    }}
                />
              )}
            </div>
          </VideoWrapper>
        </VideoContent>
      </Container>
    </Section>
  )
}
