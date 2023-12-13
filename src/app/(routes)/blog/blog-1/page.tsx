'use client'

import Image from 'next/image'
import Container from '@/app/_components/Container'
import { Article, BottomSection, Content, ContentBody, ContentParagraph, ContentTitle, ImageWrapper, Related, RelatedTitle } from '../styles'
import CardBlog from '@/app/_components/CardBlog'
import { blogList } from '@/data/blogList'

export default function Blog1() {
  return (
    <>
      <Container>
        <Article>
          <ImageWrapper>
            <Image
              src='/assets/images/gallery/training-12.jpg'
              alt=''
              sizes={`100vw, 33vw`}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </ImageWrapper>
          <Content>
            <ContentTitle>3 Tips to Maintain Your Yoga Practice</ContentTitle>
            <ContentBody>
              <ContentParagraph>
                A common mistake people make when setting intentions is to focus too much on the WHY rather than the how. If you’ve ever tried to keep up a consistent yoga practice, you might have fallen into this trap if you simply tried to stay motivated by reminding yourself how good your practice makes you feel. It’s important to get clear on why you practice, but it’s often not enough. Knowing how to stick to a consistent practice is equally (if not more!) important.
              </ContentParagraph>
              <ContentParagraph>
                Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque. In vitae turpis massa sed elementum. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Senectus et netus et malesuada. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Mauris sit amet massa vitae tortor condimentum lacinia quis. Sapien et ligula ullamcorper malesuada proin. Diam donec adipiscing tristique risus nec feugiat in fermentum. Dui accumsan sit amet nulla facilisi. Eget mauris pharetra et ultrices neque ornare. Egestas sed tempus urna et pharetra pharetra massa. Donec enim diam vulputate ut pharetra sit amet aliquam id. Vitae nunc sed velit dignissim sodales ut eu sem.
              </ContentParagraph>
              <ContentParagraph>
                Sapien pellentesque habitant morbi tristique. Auctor urna nunc id cursus metus aliquam. Massa tincidunt dui ut ornare lectus sit amet. Odio ut sem nulla pharetra diam. Nisi est sit amet facilisis magna etiam tempor. Aliquet porttitor lacus luctus accumsan tortor. Turpis egestas maecenas pharetra convallis posuere morbi leo. Cum sociis natoque penatibus et magnis. Enim sit amet venenatis urna cursus eget nunc. Etiam erat velit scelerisque in dictum. Sed risus ultricies tristique nulla aliquet enim tortor at. Dictum varius duis at consectetur lorem donec. Volutpat blandit aliquam etiam erat velit scelerisque in. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.
              </ContentParagraph>
              <ContentParagraph>
                Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Mi proin sed libero enim sed faucibus turpis in. Hac habitasse platea dictumst quisque sagittis. Ut consequat semper viverra nam libero. Metus dictum at tempor commodo ullamcorper a lacus. Id nibh tortor id aliquet lectus proin nibh nisl. Quam viverra orci sagittis eu volutpat odio. Euismod quis viverra nibh cras pulvinar mattis nunc. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Urna duis convallis convallis tellus id. Sed nisi lacus sed viverra tellus in hac habitasse. Quis blandit turpis cursus in. Lorem ipsum dolor sit amet. Malesuada pellentesque elit eget gravida cum. Volutpat est velit egestas dui id ornare arcu odio. Vitae suscipit tellus mauris a diam maecenas sed enim ut.
              </ContentParagraph>
              <ContentParagraph>
                Nunc vel risus commodo viverra maecenas accumsan lacus vel. Purus gravida quis blandit turpis cursus in hac. A arcu cursus vitae congue mauris rhoncus. A lacus vestibulum sed arcu non odio euismod lacinia at. Vivamus arcu felis bibendum ut tristique et. Risus nullam eget felis eget nunc lobortis mattis. Et malesuada fames ac turpis. Tortor vitae purus faucibus ornare suspendisse. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Dolor sit amet consectetur adipiscing elit ut aliquam. Augue neque gravida in fermentum et sollicitudin ac orci phasellus.
              </ContentParagraph>
            </ContentBody>
          </Content>
        </Article>
      </Container>
      <BottomSection>
        <RelatedTitle>Related Articles</RelatedTitle>
        <div>
          <Related>
            {blogList.map(({ title, description, photo, link }) => {

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
    </>
  )
}
