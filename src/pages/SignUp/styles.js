import styled, { keyframes } from 'styled-components'
import { fadeIn } from '../../components/Header/styles'

const downTop = keyframes`
  0% {
    transform: translateY(-100%)
  }

  100% {
    transform: translateY(0%)
  }
`

export const Container = styled.div`
  height: 100dvh;
  width: 100dvw;

  animation: ${fadeIn} 300ms linear forwards;

  font-family: Roboto;

  opacity: 0;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;

  animation: ${downTop} 800ms;

  padding: 40px 48px;

  @media (min-width: 860px) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 1280px;
  }

  > .title {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 32px;

    color: ${({ theme }) => theme.COLORS.COLOR_WHITE};

    h1 {
      font-family: Roboto;
      font-size: clamp(1.875rem, 1.053vw + 1.658rem, 2.5rem);
    }

    > svg {
      font-size: 32px;
      color: ${({ theme }) => theme.COLORS.CYAN_ORIENT};
    }
  }

  section {
    width: clamp(17.5rem, 23.913vw + 12.12rem, 31.25rem);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 32px;

    @media (min-width: 860px) {
      padding: 32px;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      border-radius: 16px;
    }

    h2 {
      display: none;

      @media (min-width: 860px) {
        display: block;
        font-family: Poppins;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
      }
    }

    > .inputWrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;

      width: 100%;
      color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};

      @media (min-width: 860px) {
        > input {
          background-color: red;
        }
      }
    }

    svg {
      color: ${({ theme }) => theme.COLORS.CYAN_ORIENT};
    }
  }
`
