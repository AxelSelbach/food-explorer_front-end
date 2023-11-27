import { Container } from './styles'

export function Button({ title, icon: Icon, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {title}
    </Container>
  )
}
