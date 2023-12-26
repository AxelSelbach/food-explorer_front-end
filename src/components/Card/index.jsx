import { useState } from 'react'
import { FaChevronRight, FaMinus, FaPlus, FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Button } from '../Button'
import { Container, Content } from './styles'

export function Card({ picture, name, price }) {
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
          <img src={picture} alt={`Prato de ${name}`} />
          <h2>
            {name}
            <FaChevronRight />
          </h2>
          <p>R$ {price}</p>
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
        <Link to="/">
          <Button title={'incluir'} />
        </Link>
      </Content>
    </Container>
  )
}
