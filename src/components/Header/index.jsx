import headerLogo from '../../assets/headerLogo.png'
import nota from '../../assets/nota.png'
import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <nav className="center">
        <div></div>
      </nav>

      <div className="centerLogo">
        <img src={headerLogo} alt="Polígono" />
        <h1>Food Explorer</h1>
      </div>

      <button>
        <img src={nota} alt="" />
      </button>
    </Container>
  )
}
