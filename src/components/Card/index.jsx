/* eslint-disable no-unneeded-ternary */
/* eslint-disable prettier/prettier */
import { useState } from 'react'
import { FaChevronRight, FaMinus, FaPlus, FaRegHeart, FaPencilAlt } from 'react-icons/fa'
import { useAuth } from '../../hooks/auth'
import { Button } from '../Button'
import { Container, Content, EditDish, DishLink } from './styles'
import { toast } from 'react-toastify'

export function Card({ data }) {
  const [quantity, setQuantity] = useState(1)

  const { user } = useAuth()
  const isAdmin = user && user.isAdmin ? true : false

  function underDevelopment() {
    toast.info(
      'Esta funcionalidade está em desenvolvimento, em breve será atualizada!',
    )
  }

  function increment() {
    if (quantity >= 0) setQuantity(quantity + 1)
  }

  function decrement() {
    if (quantity > 0) setQuantity(quantity - 1)
  }

  return (
    <Container>
      <Content>
        {
          !isAdmin && 
          <button className="favoriteButton" onClick={underDevelopment}>
            <FaRegHeart />
          </button>
        }

        {
          isAdmin && 
          <EditDish to={`/edit/${data.id}`}>
            <button>
              <FaPencilAlt />
            </button>
          </EditDish>
        }
        <div className="cardBody">
          <img
            src={data.picture}
            alt={`Prato de ${data.name}`}
          />
          <DishLink to={`/details/${data.id}`}>
            <h2>
              {data.name}
              <FaChevronRight />
            </h2>
          </DishLink>
          <span>
            {data.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
          {
            !isAdmin &&
            <div className="quantitySelect">
            <button className="minusBtn" onClick={decrement}>
              <FaMinus />
            </button>
            <span>{quantity}</span>
            <button className="plusBtn" onClick={increment}>
              <FaPlus />
            </button>
          </div>
          }

        </div>
        {
          !isAdmin && 
          <DishLink to="/">
            <Button
              title={'incluir'}
              backgroundcolor={'#750310'}
              onClick={underDevelopment}
            />
        </DishLink>
        }
      </Content>
    </Container>
  )
}
