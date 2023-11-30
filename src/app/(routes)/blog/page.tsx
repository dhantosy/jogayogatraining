import HeroDetailPage from '@/app/_components/HeroDetailPage'
import BlogSection from './(section)/BlogSection'

export default function Blog() {
  return (
    <>
      <HeroDetailPage
        title='Our Blog'
        backgroundImage='/assets/images/blog/blog.jpg'
      />
      <BlogSection />
    </>
  )
}
