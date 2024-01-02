'use client'

import Image from 'next/image'
import Container from '@/app/_components/Container'
import { Article, BottomSection, Content, ContentBody, ContentParagraph, ContentTitle, ContentSubtitle, ImageWrapper, Related, RelatedTitle, BlogWrapper } from '../styles'
import CardBlog from '@/app/_components/CardBlog'
import { blogList } from '@/data/blogList'
import Link from 'next/link'

export default function Blog1() {
  return (
    <Container>
      <BlogWrapper>
        <Article>
          <ImageWrapper>
            <Image
              src='/assets/images/blog/guide-yoga.jpg'
              alt=''
              sizes={`100vw, 33vw`}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </ImageWrapper>
          <Content>
            <ContentTitle>A Guide To Yoga Teacher Training</ContentTitle>
            <ContentBody>
              <ContentParagraph>
                Welcome to the transformative journey of Yoga Teacher Training (YTT). Whether you`re an avid yogi seeking a deeper practice or aspiring to guide others on their yogic journey, YTT is an enriching experience that goes beyond the physical postures. In this blog, we`ll explore the profound aspects of yoga teacher training, from self-discovery to teaching methodologies, and how it can shape not just your practice but your entire outlook on life.
                <ContentSubtitle>The Call to Adventure: Choosing YTT</ContentSubtitle>
                Embarking on YTT is a personal decision driven by a passion for yoga and a desire to share its benefits. Explore the reasons behind your decision and understand that this journey is about more than just becoming a certified yoga teacher – it`s an opportunity for self-discovery and growth.
              </ContentParagraph>
              <ContentParagraph>
                <ContentSubtitle>Dive Deeper: The Yogic Philosophy</ContentSubtitle>
                YTT is not just about perfecting asanas (yoga poses). It delves into the rich philosophy of yoga, exploring ancient texts like the Yoga Sutras and the Bhagavad Gita. Learn about the eight limbs of yoga, ethical guidelines (Yamas and Niyamas), and how these principles can be applied both on and off the mat.
              </ContentParagraph>
              <ContentParagraph>
                <ContentSubtitle>Mastering the Asanas: Physical and Energetic Anatomy</ContentSubtitle>
                Understand the mechanics of the human body and how each yoga pose affects it. Dive into the energetic anatomy, exploring the subtle body, chakras, and the flow of prana (life force energy). This knowledge enhances your practice and equips you to guide others safely.
              </ContentParagraph>
              <ContentParagraph>
                <ContentSubtitle>Finding Your Voice: The Art of Teaching</ContentSubtitle>
                Discover the <Link href='/blog/nurturing-souls-through-yoga-teaching'>art of teaching yoga</Link> – from creating a sacred space to effectively cueing and sequencing. YTT empowers you with the skills to adapt to different student needs, fostering a supportive and inclusive environment for all practitioners.
              </ContentParagraph>
              <ContentParagraph>
                <ContentSubtitle>Cultivating Mindfulness: Meditation and Breathwork</ContentSubtitle>
                YTT introduces powerful tools for cultivating mindfulness. Explore various meditation techniques and pranayama (breathwork) practices that not only deepen your own practice but become valuable tools to share with your future students.
              </ContentParagraph>
              <ContentParagraph>
                <ContentSubtitle>Community and Connection: Building Lifelong Bonds</ContentSubtitle>
                YTT is a shared journey, and the bonds formed with your fellow trainees are often as transformative as the training itself. Embrace the sense of community, support, and camaraderie that develops during your training.
              </ContentParagraph>
              <ContentParagraph>
                <ContentSubtitle>Beyond Certification: Integration into Daily Life</ContentSubtitle>
                As you approach the end of your YTT, reflect on how the teachings can be integrated into your daily life. Yoga is not just a practice; it`s a way of living. Consider how you can share the wisdom gained with the world and continue evolving on your path.
              </ContentParagraph>
              <ContentParagraph>
                <ContentSubtitle>Conclusion:</ContentSubtitle>
                Yoga Teacher Training is a profound and life-changing experience that goes beyond the mat. It`s an exploration of the self, a deepening of your practice, and the stepping stone to guiding others on their own yogic journey. Embrace the process, savor the knowledge gained, and get ready to share the transformative power of yoga with the world. Namaste!
              </ContentParagraph>
            </ContentBody>
          </Content>
        </Article>
        <BottomSection>
          <RelatedTitle>Related Articles</RelatedTitle>
          <div>
            <Related>
              {blogList.map(({ title, description, photo, link }, index) => {

                if (index === 1) return;

                return (
                  <div key={title}>
                    <CardBlog
                      title={title}
                      description={description}
                      photo={photo}
                      link={link}
                    />
                  </div>
                )
              })}
            </Related>
          </div>
        </BottomSection>
      </BlogWrapper>
    </Container>
  )
}
