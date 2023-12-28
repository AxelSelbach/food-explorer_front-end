/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react'
import doceSplash from '../../assets/doce.png'
import { Card } from '../../components/Card'
import { Carousel } from '../../components/Carousel'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { Cards, Container, Wrapper } from './styles'

export function Home() {
  const { user } = useAuth()
  // eslint-disable-next-line no-unneeded-ternary
  const admin = user && user.isAdmin ? true : false

  const [search, setSearch] = useState('')
  const [meals, setMeals] = useState([])
  const [dessert, setDessert] = useState([])
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    async function searchForDishes() {
      try {
        const response = await api.get(`/dishes?search=${search}`)

        setMeals(response.data.filter((dish) => dish.category === 'meals'))
        setDessert(response.data.filter((dish) => dish.category === 'dessert'))
        setDrinks(response.data.filter((dish) => dish.category === 'drinks'))
      } catch (error) {
        if (error.response) {
          return alert('Prato não encontrado!')
        }
      }
    }

    searchForDishes()
  }, [search])

  return (
    <Container>
      <Header fetchDishes={(e) => setSearch(e.target.value)} />
      <Wrapper>
        <section>
          <img src={doceSplash} alt="" />
          <aside>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </aside>
        </section>
        <Cards>

          <Section title={'Pratos principais'}>
            <Carousel>
              {meals.map(dish => (
                <Card
                  key={String(dish.id)}
                  data={dish}
                />
              ))}
            </Carousel>
          </Section>

          <Section title={'Sobremesas'}>
            <Carousel>
              {dessert.map(dish => (
                <Card
                  key={String(dish.id)}
                  data={dish}
                />
              ))}
            </Carousel>
          </Section>

          <Section title={'Bebidas'}>
            <Carousel>
              {drinks.map(dish => (
                <Card
                  key={String(dish.id)}
                  data={dish}
                />
              ))}
            </Carousel>
          </Section>

        </Cards>
      </Wrapper>
      <Footer />
    </Container>
  )
}
