import footerLogo from '../../assets/footerLogo.png'
import { Container, Content } from './styles'

export function Footer() {
  return (
    <Container>
      <Content>
        <div>
          <img src={footerLogo} alt="Poligono" />
          <span>Food Explorer</span>
        </div>

        <h2>© 2023 - Todos os direitos reservados.</h2>
      </Content>
    </Container>
  )
}
