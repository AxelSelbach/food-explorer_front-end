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
`
export const Content = styled.main`
  width: 100%;
  height: 100%;
  grid-area: content;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 16px;

  overflow: hidden;
  position: relative;

  font-family: Poppins;
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};

  padding: 24px 40px;

  .returnButton {
    align-self: self-start;
  }
`

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;

  .dishDetails {
    max-width: 1280px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    opacity: 0;

    animation: ${fadeIn} 300ms linear forwards;

    width: inherit;

    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
    }

    > img {
      height: clamp(16.25rem, 23.913vw + 10.87rem, 30rem);
      width: clamp(16.25rem, 23.913vw + 10.87rem, 30rem);

      border-radius: 999px;
    }

    .infosWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

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

        @media (min-width: 768px) {
          justify-content: flex-start;
          align-items: center;
          gap: 16px;
        }
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

      @media (min-width: 768px) {
        display: inline-flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: flex-start;
        gap: 24px;
      }
    }
  }
`

export const Edit = styled(Link)`
  width: 100%;
`
