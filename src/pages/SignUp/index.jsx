/* eslint-disable prettier/prettier */
import { useState } from 'react'
import { FaEnvelope, FaKey, FaRegUserCircle } from 'react-icons/fa'
import { FiCoffee } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { api } from '../../services/api'
import { Container, Form } from './styles'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos!')
    }


    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso!')
        navigate('-1')
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Nâo foi possível cadastrar')
        }
      })
  }
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
            onChange={e => setName(e.target.value)}
          />
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
          title={'Criar conta'}
          backgroundColor={'#750310'}
          onClick={handleSignUp}
        />
        <Link to="/">
          <ButtonText title={'Já tenho uma conta'} />
        </Link>
      </Form>
    </Container>
  )
}
