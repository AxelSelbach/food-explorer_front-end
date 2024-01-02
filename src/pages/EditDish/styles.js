import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { fadeIn } from '../../components/Header/styles'

export const Container = styled.div`
  width: 100dvw;
  height: 100dvh;

  overflow: hidden;

  display: grid;
  grid-template-rows: 10dvh 80dvh 10dvh;
  grid-template-areas:
    'header'
    'content'
    'footer';

  svg {
    color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
  }
`

export const Content = styled.div`
  grid-area: content;

  padding: 24px 32px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  overflow: auto;

  opacity: 0;
  animation: ${fadeIn} 300ms linear forwards;

  .Box {
    width: 100%;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    h1 {
      font-family: Roboto;
      font-size: 32px;
      color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
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

        label {
          color: ${({ theme }) => theme.COLORS.PEARL_GRAY};
        }

        @media (min-width: 768px) {
          display: flex;
          flex-direction: row;
        }
      }
    }
  }
`

export const InputWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;

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
    font-family: Roboto;
    font-size: 16px;

    color: ${({ theme }) => theme.COLORS.PEARL_GRAY};
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

  svg {
    color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
  }

  @media (min-width: 768px) {
    width: max-content;
  }
`
export const IngredientsWrapper = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  padding: 8px 8px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  border: none;
  border-radius: 8px;
`

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 32px;
`

export const BackLink = styled(Link)`
  width: fit-content;
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};

  > button {
    text-decoration: none;
  }
`
