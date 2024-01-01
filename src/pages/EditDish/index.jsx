import { useEffect, useState } from 'react'
import { FaAngleLeft, FaUpload } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
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

export function EditDish() {
  const [picture, setPicture] = useState('')
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  const params = useParams()

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted),
    )
  }

  async function handleDelete() {
    await api.delete(`/dishes/${params.id}`)
  }

  function handleAddIngredient(newIngredient) {
    if (ingredients.includes(newIngredient)) {
      toast.error('Ingrediente duplicado!')
      return
    }

    if (newIngredient.value === '') {
      toast.error('Ingrediente vazio!')
    }

    setIngredients((prevState) => [...prevState, newIngredient])
    setNewIngredient('')
  }

  async function handleEditDish() {
    if (
      !picture ||
      !name ||
      !category ||
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
      await toast.promise(
        imagesAPI.post('', formData).then(
          (res) =>
            api.put(`/dishes/${params.id}`, {
              description,
              category,
              price,
              name,
              ingredients,
              picture: res.data.url,
            }),
          {
            pending: 'Enviando dados...',
            success: 'Prato editado com sucesso!',
            error: 'Erro ao atualizar prato!',
          },
        ),
      )
    } catch (error) {
      if (error.response) {
        toast.error('Erro ao editar prato, tente novamente mais tarde')
      }
    }
  }

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${params.id}`)

        const dish = response.data

        setName(dish.name)
        setCategory(dish.category)
        setIngredients(dish.ingredients.map((ingredient) => ingredient.name))
        setPrice(dish.price)
        setDescription(dish.description)
      } catch (error) {
        if (error.repsonse) {
          return toast.error(error.response.data.message)
        } else {
          return toast.error(
            'Erro no carregamento das informações, tente novamente mais tarde',
          )
        }
      }
    }

    fetchDish()
  }, [params.id])

  return (
    <Container>
      <Header />
      <Content>
        <BackLink to="/">
          <ButtonText
            // eslint-disable-next-line prettier/prettier
            icon={FaAngleLeft}
            title={'Voltar'}
          />
        </BackLink>

        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Editar prato</h1>
          <fieldset>
            <label htmlFor="picture">Imagem do prato</label>
            <InputFile>
              <FaUpload />
              <label htmlFor="picture">
                Selecione uma imagem para alterá-la
              </label>
              <input
                className="inputFile"
                onChange={(e) => {
                  setPicture(e.target.files[0])
                }}
                type="file"
                id="picture"
              />
            </InputFile>

            <InputWrapper>
              <label htmlFor="name">Nome</label>
              <input
                placeholder={`${name}`}
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </InputWrapper>

            <Select
              title={'Categoria'}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="ingredients">Ingredients</label>
            <IngredientsWrapper>
              {ingredients.map((ingredient, index) => (
                // eslint-disable-next-line prettier/prettier
                <IngredientTag
                  key={index}
                  value={ingredient}
                  onClick={() => handleRemoveIngredient(ingredient)}
                />
              ))}
              <IngredientTag
                placeholder="Adicionar"
                isNew
                id="ingredients"
                // eslint-disable-next-line prettier/prettier
                onChange={e => setNewIngredient(e.target.value)}
                onClick={() => {
                  handleAddIngredient(newIngredient)
                }}
              />
            </IngredientsWrapper>
            <InputWrapper>
              <label htmlFor="price">Preço</label>
              <input
                type="number"
                id="price"
                value={`${price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}`}
                placeholder={`${price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}`}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </InputWrapper>
          </fieldset>
          <InputWrapper>
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              placeholder={`${description}`}
              value={description}
              cols="30"
              rows="10"
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </InputWrapper>

          <ButtonsWrapper>
            <Button
              title="Excluir prato"
              backgroundcolor={'#0D161B'}
              onClick={handleDelete}
            />

            <Button
              title="Editar Prato"
              backgroundcolor={'#AB4D55'}
              onClick={handleEditDish}
            />
          </ButtonsWrapper>
        </form>
      </Content>
      <Footer />
    </Container>
  )
}
