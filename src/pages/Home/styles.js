import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 10dvh 80dvh 10dvh;
  grid-template-areas:
    'header'
    'content'
    'footer';
`

export const Wrapper = styled.main`
  grid-area: content;
  display: flex;
  flex-direction: column;

  overflow: auto;

  > section {
    display: flex;
    color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

    margin: 44px 24px 44px 24px;
    height: 120px;

    > aside {
      margin-top: 10px;

      h2 {
        font-family: Poppins;
        font-size: 16px;
        font-weight: 600;
      }

      p {
        font-family: Poppins;
        font-size: 12px;
        font-weight: 400;
      }
    }
  }
`

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
