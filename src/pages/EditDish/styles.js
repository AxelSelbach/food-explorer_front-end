import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { fadeIn } from '../../components/Header/styles'

export const Container = styled.div`
  width: 100dvw;
  height: 100dvh;

  overflow: auto;
  color: white;
  grid-area: content;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 24px 32px;

  opacity: 0;
  animation: ${fadeIn} 300ms linear forwards;

  h1 {
    font-family: Roboto;
    font-size: 32px;
  }

  input,
  textarea {
    padding: 12px 14px;

    font-family: Roboto;
    font-size: 16px;
    font-style: normal;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    border: none;
    border-radius: 8px;

    color: ${({ theme }) => theme.COLORS.COLOR_WHITE};

    resize: none;

    &:focus {
      outline: none;
    }
  }

  label {
    color: ${({ theme }) => theme.COLORS.PEARL_GRAY};
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 24px;

    fieldset {
      display: flex;
      flex-direction: column;
      gap: 16px;
      border: none;
    }
  }
`

export const InputFile = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  padding: 12px 32px;
  border-radius: 8px;

  display: flex;
  align-items: baseline;
  gap: 8px;

  input {
    display: none;
  }
`
export const IngredientsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
  padding: 8px 8px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  border: none;
  border-radius: 8px;
`
export const BackLink = styled(Link)`
  width: fit-content;
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};

  > button {
    text-decoration: none;
  }
`
