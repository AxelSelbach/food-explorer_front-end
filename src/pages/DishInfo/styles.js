import styled from 'styled-components'
import { fadeIn } from '../../components/Header/styles'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100dvw;
  height: 100dvh;
  grid-area: content;
`
export const Content = styled.main`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  flex-wrap: wrap;
  overflow: auto;

  font-family: Poppins;
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};

  padding: 24px 40px;

  .dishDetails {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    opacity: 0;

    animation: ${fadeIn} 300ms linear forwards;

    width: inherit;

    .returnButton {
      align-self: flex-start;
    }

    > img {
      height: clamp(16.25rem, 23.718vw + 10.913rem, 39.375rem);
      width: clamp(16.25rem, 23.718vw + 10.913rem, 39.375rem);
    }

    > h2 {
      font-size: 16px;
    }

    > p {
      font-size: 14px;
    }

    > .ingredientsWrapper {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 16px;
    }

    > .buttonsWrapper {
      display: flex;
      flex-direction: row;
      gap: 16px;
      align-items: center;
      margin-top: 32px;

      > .minusBtn,
      .plusBtn {
        border: none;
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.COLOR_WHITE};

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
      }
    }
  }
`

export const Edit = styled(Link)`
  width: 100%;
`
