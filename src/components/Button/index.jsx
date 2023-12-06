import { Container } from './styles'

export function Button({ title, icon: Icon, isActive = false, ...rest }) {
  return (
    <Container type="button" $isative={isActive} {...rest}>
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  )
}
