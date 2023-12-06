import { FaEnvelope, FaKey } from 'react-icons/fa'
import { FiCoffee } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Container, Form } from './styles'

export function SignIn() {
  return (
    <Container>
      <Form>
        <div className="title">
          <FiCoffee />
          <h1>Food Explorer</h1>
        </div>

        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <Input
            type="text"
            icon={FaEnvelope}
            id="email"
            placeholder="exemplo@exemplo.com.br"
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Senha</label>
          <Input
            type="text"
            icon={FaKey}
            id="password"
            placeholder="Senha de no mínimo 6 caracteres"
          />
        </div>

        <Button title={'Entrar'} />
        <ButtonText title={'Criar uma conta'} />
      </Form>
    </Container>
  )
}
