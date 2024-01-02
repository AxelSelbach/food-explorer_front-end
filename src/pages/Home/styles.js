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

export const Wrapper = styled.main`
  width: 100%;
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;

  opacity: 0;

  animation: ${fadeIn} 300ms forwards;

  overflow: auto;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .Box {
    max-width: 1280px;
    width: 100%;
    display: flex;
    flex-direction: column;

    > section {
      max-width: 1280px;
      width: 98%;

      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      justify-content: space-around;

      align-self: center;

      position: relative;

      font-family: Poppins;
      color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

      border-radius: 2px;

      margin: 44px 24px 44px 24px;
      height: 120px;

      &::after {
        content: '';
        background-color: linear-gradient(180deg, #091e26 0%, #00131c 100%);
      }

      > img {
        width: clamp(12.5rem, 10.87vw + 8rem, 18.75rem);
        align-self: self-end;
        object-fit: cover;

        @media (min-width: 768px) {
          width: clamp(12.5rem, 13.87vw + 10rem, 18.75rem);
        }
      }

      > aside {
        display: flex;
        flex-direction: column;
        gap: 6px;
        align-items: flex-start;
        padding: 16px;

        > h2 {
          font-size: clamp(1rem, 2.609vw + 0.413rem, 2.5rem);
          font-weight: 600;

          @media (min-width: 768px) {
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%;
          }
        }

        > p {
          font-size: clamp(0.75rem, 0.435vw + 0.652rem, 1rem);
          font-weight: 400;
        }
      }

      @media (min-width: 768px) {
        margin-top: 80px;
        height: 180px;
        border-radius: 8px;
      }
    }
  }
`

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
