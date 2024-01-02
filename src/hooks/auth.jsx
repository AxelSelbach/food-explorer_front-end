import { createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../services/api'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  async function signIn({ email, password }) {
    setLoading(true)
    try {
      const response = await api.post('/sessions', { email, password })
      const { token, user } = response.data

      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
      localStorage.setItem('@foodexplorer:token', token)

      api.defaults.headers.common.Authorization = `Bearer ${token}`

      setData({ user, token })

      setLoading(false)
      toast.success(`Bem vindo, ${user.name}!`)
    } catch (error) {
      setLoading(false)
      if (error.response) {
        toast(error.response.data.message)
      } else {
        toast.error('Não foi possível entrar')
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@foodexplorer:user')
    localStorage.removeItem('@foodexplorer:token')

    setData({})

    toast.success('Até logo!')
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        loading,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
