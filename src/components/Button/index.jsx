import { Container } from './styles'

export function Button({ title, icon: Icon, backgroundcolor, ...rest }) {
  return (
    // eslint-disable-next-line prettier/prettier
    <Container
      type="button"
      $backgroundcolor={backgroundcolor}
      {...rest}
    >
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  )
}
