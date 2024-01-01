/* eslint-disable no-unneeded-ternary */
import { useState } from 'react'
import { FaReceipt, FaSearch } from 'react-icons/fa'
import headerLogo from '../../assets/headerLogo.png'
import { useAuth } from '../../hooks/auth'
import { ButtonText } from '../ButtonText'
import { Input } from '../Input'
import { Add, Container, Wrapper } from './styles'

export function Header({ fetchDishes }) {
  const [menu, setMenu] = useState(false)
  const { user, signOut } = useAuth()

  const isAdmin = user && user.isAdmin ? true : false

  function openCloseMenu() {
    setMenu(!menu)
  }

  return (
    <Container>
      <Wrapper>
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
            {
              // eslint-disable-next-line prettier/prettier
              isAdmin &&
              <span className="adminSpan">admin</span>
            }
          </div>

          {!isAdmin && (
            <button className={`receipt ${menu ? 'active' : ''}`}>
              <FaReceipt />
              <div className="requestsNumber">0</div>
            </button>
          )}
        </div>
        <div className={`menu ${menu ? 'menuOpen' : ''}`}>
          <div className="opennedMenu">
            <Input
              icon={FaSearch}
              type="text"
              placeholder="Busque por pratos ou ingredientes"
              onChange={fetchDishes}
            />
            <ul>
              {isAdmin && (
                <li>
                  <Add to="/add">
                    <ButtonText title={'Novo Prato'} />
                  </Add>
                </li>
              )}

              <li>
                <ButtonText title={'Sair'} onClick={signOut} />
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </Container>
  )
}
