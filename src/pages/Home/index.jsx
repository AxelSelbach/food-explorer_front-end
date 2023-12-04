import doceSplash from '../../assets/doce.png'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Header />
      <section>
        <img src={doceSplash} alt="" />
        <aside>
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </aside>
      </section>
      <Footer />
    </Container>
  )
}
