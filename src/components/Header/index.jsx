import { useState } from 'react'
import { FaReceipt, FaSearch } from 'react-icons/fa'
import headerLogo from '../../assets/headerLogo.png'
import { ButtonText } from '../ButtonText'
import { Input } from '../Input'
import { Container } from './styles'

export function Header() {
  const [menu, setMenu] = useState(false)

  function openCloseMenu() {
    setMenu(!menu)
  }

  return (
    <Container>
      <div className="Content">
        <div
          className={`mobileMenu ${menu ? 'burguer' : ''}`}
          onClick={openCloseMenu}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <p className={`${menu ? '' : 'active'}`}>Menu</p>

        <div className={`centerLogo ${menu ? 'active' : ''}`}>
          <img src={headerLogo} alt="Polígono" />
          <h1>Food Explorer</h1>
        </div>

        <button className={`receipt ${menu ? 'active' : ''}`}>
          <FaReceipt />
          <div className="requestsNumber">0</div>
        </button>
      </div>
      <div className={`menu ${menu ? 'menuOpen' : ''}`}>
        <div className="opennedMenu">
          <Input
            type="text"
            placeholder="Busque por pratos ou ingredientes"
            icon={FaSearch}
          />
          <ul>
            <li>
              <ButtonText title={'Sair'} />
            </li>
            <div className="line"></div>
          </ul>
        </div>
      </div>
    </Container>
  )
}
