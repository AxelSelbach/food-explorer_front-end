import { FaAngleLeft, FaUpload } from 'react-icons/fa'
import { ButtonText } from '../../components/ButtonText'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Container, Content } from './styles'

export function AddDish() {
  return (
    <Container>
      <Header />
      <Content>
        <ButtonText icon={FaAngleLeft} title={'Voltar'} />
        <form>
          <h1>Novo Prato</h1>
          <fieldset>
            <label htmlFor="picture">
              Imagem do prato
              <Input
                icon={FaUpload}
                title={'Selecione imagem'}
                type="file"
                id="picture"
                required
              />
            </label>

            <label htmlFor="name">
              Nome
              <Input
                placeholder={'Ex.: Salada Ceasar'}
                type="text"
                id="name"
                required
              />
            </label>
          </fieldset>
        </form>
      </Content>
      <Footer />
    </Container>
  )
}
