import styled from 'styled-components'

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
      display: flex;
      color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

      margin: 44px 24px 44px 24px;
      height: 120px;

      > aside {
        margin-top: 10px;

        > h2 {
          font-family: Poppins;
          font-size: 16px;
          font-weight: 600;
        }

        > p {
          font-family: Poppins;
          font-size: 12px;
          font-weight: 400;
        }
      }
    }
  }
`

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
