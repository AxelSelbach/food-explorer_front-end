import { FaReceipt } from 'react-icons/fa'
import headerLogo from '../../assets/headerLogo.png'
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

      <button className="receipt">
        <FaReceipt />
        <div className="requestsNumber">0</div>
      </button>
    </Container>
  )
}
