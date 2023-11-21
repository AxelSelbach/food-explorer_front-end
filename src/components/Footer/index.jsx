import { Container } from './styles'
import footerLogo from '../../assets/footerLogo.png'

export function Footer() {
  return (
    <Container>
      <div>
        <img src={footerLogo} alt="Poligono" />
        <span>Food Explorer</span>
      </div>

      <h2>© 2023 - Todos os direitos reservados.</h2>
    </Container>
  )
}
