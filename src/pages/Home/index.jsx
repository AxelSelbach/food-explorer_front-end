import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Header />
      <h1>Hello World!</h1>
      <Footer />
    </Container>
  )
}
