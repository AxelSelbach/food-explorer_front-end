import { Container } from './styles'

export function Section({ title, children, ...rest }) {
  return (
    <Container {...rest}>
      <h3>{title}</h3>
      <div>{children}</div>
    </Container>
  )
}
