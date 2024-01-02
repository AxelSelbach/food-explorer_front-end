import { useState } from 'react'
import { FaAngleLeft, FaUpload } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { IngredientTag } from '../../components/IngredientTag'
import { Select } from '../../components/Select'
import { api, imagesAPI } from '../../services/api'
import {
  BackLink,
  ButtonsWrapper,
  Container,
  Content,
  IngredientsWrapper,
  InputFile,
  InputWrapper,
} from './styles'

export function AddDish() {
  const [picture, setPicture] = useState('')
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  const navigate = useNavigate()

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted),
    )
  }

  function handleAddLink() {
    if (ingredients.includes(newIngredient)) {
      toast.error('Ingrediente duplicado!')
      return
    }

    if (ingredients.length === 0 || newIngredient === '') {
      toast.error('Ingrediente Vazio / Inexistente')
      return
    }

    setIngredients((prevState) => [...prevState, newIngredient])
    setNewIngredient('')
  }

  async function handleAddDish() {
    if (
      !picture ||
      !name ||
      !category ||
      !ingredients ||
      !price ||
      !description ||
      ingredients.length === 0
    ) {
      toast.info('Para fazer o envio, é necessário preencher todos os campos!')
      return
    }

    const formData = new FormData()
    formData.append('photo', picture)
    try {
      toast.promise(
        imagesAPI.post('', formData).then(
          (res) =>
            api.post('/dishes', {
              picture: res.data.url,
              name,
              category,
              ingredients,
              price,
              description,
            }),
          toast.success('Prato criado com sucesso!'),
          navigate('-1'),
        ),
      )
    } catch (error) {
      if (error.response) {
        return toast.error(
          'Erro ao adicionar novo prato, tente novamente mais tarde',
        )
      }
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <div className="Box">
          <BackLink to="/">
            <ButtonText
              // eslint-disable-next-line prettier/prettier
              icon={FaAngleLeft}
              title={'Voltar'}
            />
          </BackLink>

          <h1>Novo Prato</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <fieldset>
              <InputWrapper>
                <label htmlFor="picture">Imagem do prato</label>
                <InputFile>
                  <FaUpload />
                  <label htmlFor="picture">Selecione uma imagem</label>
                  <input
                    className="inputFile"
                    onChange={(e) => {
                      setPicture(e.target.files[0])
                    }}
                    type="file"
                    id="picture"
                  />
                </InputFile>
              </InputWrapper>

              <InputWrapper>
                <label htmlFor="name">Nome</label>
                <input
                  placeholder={'Ex.: Salada Ceasar'}
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </InputWrapper>

              <Select
                title={'Categoria'}
                onChange={(e) => setCategory(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <InputWrapper>
                <label htmlFor="ingredients">Ingredients</label>
                <IngredientsWrapper>
                  {ingredients.map((ingredient, index) => (
                    // eslint-disable-next-line prettier/prettier
                    <IngredientTag
                      key={String(index)}
                      value={ingredient}
                      onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  ))}
                  <IngredientTag
                    placeholder="Adicionar"
                    isNew
                    id="ingredients"
                    value={newIngredient}
                    // eslint-disable-next-line prettier/prettier
                    onChange={e => setNewIngredient(e.target.value)}
                    onClick={handleAddLink}
                  />
                </IngredientsWrapper>
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="price">Preço</label>
                <input
                  type="number"
                  id="price"
                  placeholder="R$ 00,00"
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </InputWrapper>
            </fieldset>
            <InputWrapper>
              <label htmlFor="description">Descrição</label>
              <textarea
                id="description"
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                cols="30"
                rows="10"
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </InputWrapper>

            <ButtonsWrapper>
              <aside>
                <Button
                  title="Criar Prato"
                  type={'submit'}
                  backgroundcolor={'#AB4D55'}
                  onClick={handleAddDish}
                />
              </aside>
            </ButtonsWrapper>
          </form>
        </div>
      </Content>
      <Footer />
    </Container>
  )
}
