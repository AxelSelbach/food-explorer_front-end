/* eslint-disable no-unneeded-ternary */
import { useState } from 'react'
import { FaReceipt, FaSearch, FaSignOutAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'
import headerLogo from '../../assets/headerLogo.png'
import { useAuth } from '../../hooks/auth'
import { Button } from '../Button'
import { ButtonText } from '../ButtonText'
import { Input } from '../Input'
import { Add, Container, Wrapper } from './styles'

export function Header({ fetchDishes }) {
  const [menu, setMenu] = useState(false)
  const { user, signOut } = useAuth()

  const isAdmin = user && user.isAdmin ? true : false

  function underDevelopment() {
    toast.info(
      'Esta funcionalidade está em desenvolvimento, em breve será atualizada!',
    )
  }

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

          <nav>
            <Input
              className={'search'}
              icon={FaSearch}
              type="text"
              placeholder="Busque por pratos ou ingredientes"
              onChange={fetchDishes}
            />
            {!isAdmin && (
              <Button
                className={'requests'}
                icon={FaReceipt}
                backgroundcolor={'#750310'}
                title={'Pedidos(0)'}
                onClick={underDevelopment}
              />
            )}
            {isAdmin && (
              <Add to="/add">
                <Button
                  // eslint-disable-next-line prettier/prettier
                  className={'newDish'}
                  backgroundcolor={'#750310'}
                  title={'Novo Prato'}
                />
              </Add>
            )}

            <button className="logout" onClick={signOut}>
              <FaSignOutAlt />
            </button>
          </nav>

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
