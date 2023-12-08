import { FaAngleLeft, FaMinus, FaPlus, FaReceipt } from 'react-icons/fa'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Ingredient } from '../../components/Ingredient'
import { Container, Content } from './styles'

export function DishInfo() {
  return (
    <Container>
      <Header />
      <Content>
        <div className="dishDetails">
          <div className="returnButton">
            <ButtonText icon={FaAngleLeft} title={'Voltar'} />
          </div>
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h2>Salada Ravanello</h2>
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </p>

          <div className="ingredientsWrapper">
            <Ingredient title={'Alface'} />
            <Ingredient title={'Tomate'} />
            <Ingredient title={'Rabanete'} />
            <Ingredient title={'Gergelim'} />
          </div>

          <div className="buttonsWrapper">
            <button className="minusBtn">
              <FaMinus />
            </button>
            <span>01</span>
            <button className="plusBtn">
              <FaPlus />
            </button>

            <Button icon={FaReceipt} title={'pedir ∙ R$25,00'} />
          </div>
        </div>
      </Content>
      <Footer />
    </Container>
  )
}
