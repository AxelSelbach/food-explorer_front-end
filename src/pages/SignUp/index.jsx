import { FaEnvelope, FaKey, FaRegUserCircle } from 'react-icons/fa'
import { FiCoffee } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Container, Form } from './styles'

export function SignUp() {
  return (
    <Container>
      <Form>
        <div className="title">
          <FiCoffee />
          <h1>Food Explorer</h1>
        </div>

        <div className="inputWrapper">
          <label htmlFor="name">Seu nome</label>
          <Input
            type="text"
            icon={FaRegUserCircle}
            id="name"
            placeholder="Seu nome da Silva"
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="email">Email</label>
          <Input
            type="text"
            icon={FaEnvelope}
            id="email"
            placeholder="exemplo@exemplo.com.br"
          />
        </div>

        <div className="inputWrapper">
          <label htmlFor="password">Senha</label>
          <Input
            type="text"
            icon={FaKey}
            id="password"
            placeholder="Senha de no mínimo 6 caracteres"
          />
        </div>

        <Button title={'Criar conta'} />
        <ButtonText title={'Já tenho uma conta'} />
      </Form>
    </Container>
  )
}
