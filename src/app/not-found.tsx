'use client'

import Link from 'next/link'
import { NotFound, Title, Text, Content } from './styles'

function NotFoundPage() {
  return (
    <NotFound>
      <Content>
        <Title>404</Title>
        <Text>Page Not Found</Text>
        <Link href='/'>Back to Home</Link>
      </Content>
    </NotFound>
  )
}

export default NotFoundPage
