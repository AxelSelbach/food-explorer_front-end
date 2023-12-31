/* eslint-disable prettier/prettier */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaKey } from 'react-icons/fa'
import { FiCoffee } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/auth'
import { Container, Form } from './styles'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handleSignIn() {
    if (!email || !password) {
      return alert('Preencha todos os campos')
    }

    signIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <div className="title">
          <FiCoffee />
          <h1>Food Explorer</h1>
        </div>

        <div className="inputWrapper">
          <label htmlFor="email">Email</label>
          <Input
            type="text"
            icon={FaEnvelope}
            id="email"
            placeholder="exemplo@exemplo.com.br"
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="inputWrapper">
          <label htmlFor="password">Senha</label>
          <Input
            type="password"
            icon={FaKey}
            id="password"
            placeholder="Senha de no mínimo 6 caracteres"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <Button
          title={'Entrar'}
          backgroundColor={'#750310'}
          onClick={handleSignIn}
        />
        <Link to="/register">
          <ButtonText title={'Criar uma conta'} />
        </Link>
      </Form>
    </Container>
  )
}
