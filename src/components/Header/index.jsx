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
      <div className={`Content ${menu ? 'active' : ''}`}>
        <button className="burguerMenu" onClick={openCloseMenu}>
          <div></div>
        </button>

        <div className="centerLogo">
          <img src={headerLogo} alt="Polígono" />
          <h1>Food Explorer</h1>
        </div>

        <button className="receipt">
          <FaReceipt />
          <div className="requestsNumber">0</div>
        </button>
      </div>
      <div className={`menu ${menu ? '' : 'active'}`}>
        <menu>
          <button className="closeMenu" onClick={openCloseMenu} />
          <p>Menu</p>
        </menu>
        <div className="opennedMenu">
          <div className="opennedMenuContent">
            <ul>
              <li>
                <Input
                  type="text"
                  placeholder="Busque por pratos ou ingredientes"
                  icon={FaSearch}
                />
              </li>
              <li>
                <ButtonText title={'Sair'} />
              </li>
              <div className="line"></div>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}
