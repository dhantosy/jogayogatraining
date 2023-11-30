'use client'

import Container from '@/app/_components/Container'
import CardBlog from '@/app/_components/CardBlog'
import { blogList } from '@/data/blogList'
import { Section } from './styles';

export default function BlogSection() {

  return (
    <Container>
      <Section>
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
      </Section>
    </Container>
  )
}
