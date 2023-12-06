import { FaCoffee } from 'react-icons/fa'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Container, Form } from './styles'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>
          <FaCoffee /> Food Explorer
        </h1>
        <Input />
        <Input />
        <button>Entrar</button>
        <ButtonText title={'Criar uma conta'} />
      </Form>
    </Container>
  )
}
