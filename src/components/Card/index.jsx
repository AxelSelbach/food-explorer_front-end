import { useState } from 'react'
import { FaChevronRight, FaMinus, FaPlus, FaRegHeart } from 'react-icons/fa'
import { Button } from '../Button'
import { Container, Content, IncludeButton } from './styles'

export function Card({ data }) {
  const [quantity, setQuantity] = useState(1)

  function increment() {
    if (quantity >= 0) setQuantity(quantity + 1)
  }

  function decrement() {
    if (quantity > 0) setQuantity(quantity - 1)
  }

  return (
    <Container>
      <Content>
        <button className="favoriteButton">
          <FaRegHeart />
        </button>
        <div className="cardBody">
          <img src={data.picture} alt={`Prato de ${data.name}`} />
          <h2>
            {data.name}
            <FaChevronRight />
          </h2>
          <p className="description">{data.description}</p>
          <span>R$ {data.price}</span>
          <div className="quantitySelect">
            <button className="minusBtn" onClick={decrement}>
              <FaMinus />
            </button>
            <span>{quantity}</span>
            <button className="plusBtn" onClick={increment}>
              <FaPlus />
            </button>
          </div>
        </div>
        <IncludeButton to="/">
          <Button title={'incluir'} />
        </IncludeButton>
      </Content>
    </Container>
  )
}
