import { FaAngleDown } from 'react-icons/fa'
import { Container, SelectWrapper } from './styles'

export function Select({ title, ...rest }) {
  return (
    <Container>
      <label>{title}</label>
      <SelectWrapper>
        <select name="category" required {...rest}>
          <option value="" disabled>
            Escolha uma opção
          </option>
          <option value="meals">Pratos principais</option>
          <option value="dessert">Sobremesas</option>
          <option value="drinks">Bebidas</option>
        </select>
        <FaAngleDown />
      </SelectWrapper>
    </Container>
  )
}
