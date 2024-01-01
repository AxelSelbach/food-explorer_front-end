import { useEffect, useState } from 'react'
import { FaAngleLeft, FaUpload } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
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
  Container,
  Content,
  IngredientsWrapper,
  InputFile,
} from './styles'

export function AddDish() {
  const [picture, setPicture] = useState('')
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  const params = useParams()
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

  async function handleEditDish() {
    if (
      !picture ||
      !name ||
      !category ||
      !ingredients ||
      !price ||
      !description
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
          toast.success('Prato editado com sucesso!'),
          navigate('-1'),
        ),
      )
    } catch (error) {
      if (error.response) {
        return toast.error('Erro ao editar prato, tente novamente mais tarde')
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
  }, [])

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

        <form>
          <h1>Edtiar prato</h1>
          <fieldset>
            <label htmlFor="picture">Imagem do prato</label>
            <InputFile>
              <FaUpload />
              <label htmlFor="picture">
                Selecione uma imagem para alterá-la
              </label>
              <input className="inputFile" type="file" id="picture" />
            </InputFile>

            <label htmlFor="name">Nome</label>
            <input
              placeholder={`${name}`}
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

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
            <label htmlFor="price">Preço</label>
            <input
              type="number"
              id="price"
              placeholder={`${price}`}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </fieldset>
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            placeholder={`${description}`}
            cols="30"
            rows="10"
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <Button
            title="Editar Prato"
            type={'submit'}
            backgroundcolor={'#AB4D55'}
            onClick={handleAddDish}
          />
        </form>
      </Content>
      <Footer />
    </Container>
  )
}
