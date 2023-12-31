/* eslint-disable prettier/prettier */
import { FaPlus, FaTimes } from 'react-icons/fa'

import { Container } from './styles'

export function IngredientTag({ isNew, value, onClick, ...rest }) {
  return (
    <Container isnew={isNew ? 1 : 0}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
        required 
      />

      <button
        type="button"
        onClick={onClick}
      >
        {isNew ? <FaPlus /> : <FaTimes />}
      </button>
    </Container>
  )
}
