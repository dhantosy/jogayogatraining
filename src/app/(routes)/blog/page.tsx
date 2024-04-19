import HeroDetailPage from '@/app/_components/HeroDetailPage'
import BlogSection from './(section)/BlogSection'
import ImageBlog from 'public/assets/images/blog/blog.jpg'

export default function Blog() {
  return (
    <>
      <HeroDetailPage
        title='Our Blog'
        backgroundImage={ImageBlog}
      />
      <BlogSection />
    </>
  )
}
