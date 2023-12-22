import { useState } from 'react'
import { FaChevronRight, FaMinus, FaPlus, FaRegHeart } from 'react-icons/fa'
import { Button } from '../Button'
import { Container, Content } from './styles'

export function Card({ picture, name, price, quantity, favorite }) {
  const [favorited, setFavorited] = useState(favorite)

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
            <button className="minusBtn">
              <FaMinus />
            </button>
            <span>{quantity}</span>
            <button className="plusBtn">
              <FaPlus />
            </button>
          </div>
        </div>
        <Button title={'incluir'} />
      </Content>
    </Container>
  )
}
