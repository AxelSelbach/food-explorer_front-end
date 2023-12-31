/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react'
import { FaAngleLeft, FaMinus, FaPlus, FaReceipt } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Ingredient } from '../../components/Ingredient'
import { api } from '../../services/api'
import { Container, Content } from './styles'

export function DishInfo() {
  const [data, setData] = useState(null)
  const [amount, setAmount] = useState(1)

  const params = useParams()

  function decrement() {
    if (amount > 0) {
      setAmount(amount - 1)
    }
  }

  function increment() {
    if (amount >= 0) {
      setAmount(amount + 1)
    }
  }

  useEffect(() => {
    async function getDish() {
      try {
        const response = await api.get(`/dishes/${params.id}`)

        setData(response.data)
      } catch (error) {
        if (error.response) {
          alert('Erro no carregamento das informações!')
        }
      }
    }

    getDish()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Header />
      {
        data &&
        <Content>
        <div className="dishDetails">
          <div className="returnButton">
            <Link to='/'>
              <ButtonText icon={FaAngleLeft} title={'Voltar'} />
            </Link>
          </div>
          <img
            src='https://unsplash.com/pt-br/fotografias/uma-pessoa-cortando-um-sanduiche-em-uma-tabua-de-corte-0Ci47m3L-I8'
            alt={`Imagem da refeição, sobremesa ou bebida ${data.name}`}
          />
          <h2>{data.name}</h2>
          <p>{data.description}</p>

          <div className="ingredientsWrapper">
            {
              data.ingredients.map(ingredient => (
                <Ingredient
                  key={String(ingredient.id)}
                  title={ingredient.name}
                />
              ))
            }
          </div>

          <div className="buttonsWrapper">
            <button className="minusBtn" onClick={decrement}>
              <FaMinus />
            </button>
            <span>{amount}</span>
            <button className="plusBtn" onClick={increment}>
              <FaPlus />
            </button>

            <Button
              icon={FaReceipt}
              backgroundColor={'#750310'}
              title={`pedir ∙ ${data.price.toLocaleString(
                'pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }
              )}`} 
            />
          </div>
        </div>
      </Content>
      }
      
      <Footer />
    </Container>
  )
}
