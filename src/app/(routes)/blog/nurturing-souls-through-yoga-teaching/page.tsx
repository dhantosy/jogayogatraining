'use client'

import Image from 'next/image'
import Container from '@/app/_components/Container'
import { Article, BottomSection, Content, ContentBody, ContentParagraph, ContentTitle, ContentSubtitle, ImageWrapper, Related, RelatedTitle, BlogWrapper } from '../styles'
import CardBlog from '@/app/_components/CardBlog'
import { blogList } from '@/data/blogList'

export default function Blog1() {
  return (
    <Container>
      <BlogWrapper>
        <Article>
          <ImageWrapper>
            <Image
              src='/assets/images/blog/soul-yoga.jpg'
              alt=''
              sizes={`100vw, 33vw`}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </ImageWrapper>
          <Content>
            <ContentTitle>Nurturing Souls Through Yoga Teaching</ContentTitle>
            <ContentBody>
              <ContentParagraph>
                Welcome to the sacred space where the mat unfolds into a canvas for transformation. Teaching yoga is not just an occupation; it`s a soulful art. In this blog, we explore the intricacies of guiding others through the practice of yoga, from creating a nurturing environment to fostering mindfulness and self-discovery.
                <ContentSubtitle>The Foundation: Cultivating Your Own Practice</ContentSubtitle>
                Before you guide others, cultivate a deep and consistent personal practice. Explore the profound impact of your practice on your teaching, as authenticity and passion are born from your own experience on the mat.
              </ContentParagraph>
              <ContentParagraph>
                <ContentSubtitle>Beyond the Physical: Crafting an Inclusive Space</ContentSubtitle>
                Yoga is for every body, and creating an inclusive environment is key. Learn how to embrace diversity, adapt your teaching to various abilities, and ensure that every student feels welcome, supported, and empowered on their unique journey.
              </ContentParagraph>
              <ContentParagraph>
                <ContentSubtitle>The Power of Presence: Mindful Teaching Techniques</ContentSubtitle>
                Explore the art of being present in your classes. Understand how cultivating mindfulness enhances your ability to connect with students, adapt to their needs, and create an atmosphere where each breath and movement is a conscious, shared experience.
              </ContentParagraph>
              <ContentParagraph>
                <ContentSubtitle>Verbal Alchemy: Effective Communication</ContentSubtitle>
                Discover the transformative power of words. Hone your communication skills to deliver clear and empowering cues, ensuring that your guidance resonates with students both physically and spiritually. Language becomes a tool for inspiration and connection.
              </ContentParagraph>
              <ContentParagraph>
                <ContentSubtitle>Eyes of Compassion: Understanding Your Students</ContentSubtitle>
                Every student is on a unique path. Develop the ability to observe and understand the needs of your students. Cultivate compassion and offer modifications or adjustments that cater to individual bodies and experiences.
              </ContentParagraph>
              <ContentParagraph>
                <ContentSubtitle>Music and Silence: Crafting the Sonic Landscape</ContentSubtitle>
                Explore the role of music and silence in your classes. Learn how to use sound mindfully to enhance the yoga experience, creating a harmonious atmosphere that supports the flow of energy and allows for moments of introspection.
              </ContentParagraph>
              <ContentParagraph>
                <ContentSubtitle>Spiritual Leadership: Embracing the Role</ContentSubtitle>
                Teaching yoga is a form of spiritual leadership. Understand the responsibility that comes with guiding others on their journey and embrace the opportunity to inspire positive transformation, both on and off the mat.
              </ContentParagraph>
              <ContentParagraph>
                <ContentSubtitle>Conclusion:</ContentSubtitle>
                Teaching yoga is a profound and rewarding journey that extends beyond physical postures. As you step into the role of a yoga guide, remember that you are not just instructing movements; you are nurturing souls. Embrace the art of teaching with authenticity, compassion, and a commitment to creating spaces where students can explore the depths of their own being. May your journey as a yoga teacher be as transformative and fulfilling as the practice itself. Namaste!
              </ContentParagraph>
            </ContentBody>
          </Content>
        </Article>
        <BottomSection>
          <RelatedTitle>Related Articles</RelatedTitle>
          <div>
            <Related>
              {blogList.map(({ title, description, photo, link }, index) => {

                if (index === 0) return;

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
