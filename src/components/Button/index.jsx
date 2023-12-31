import { Container } from './styles'

export function Button({ title, icon: Icon, backgroundColor, ...rest }) {
  return (
    // eslint-disable-next-line prettier/prettier
    <Container
      type="button"
      backgroundColor={backgroundColor}
      {...rest}
    >
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  )
}
