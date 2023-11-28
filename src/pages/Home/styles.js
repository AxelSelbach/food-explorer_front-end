import styled from 'styled-components'

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 10vh 80vh auto;
  grid-template-areas:
    'header'
    'content'
    'footer';

  grid-area: content;

  > section {
    display: flex;
    color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

    margin: 44px 16px 44px 36px;
    height: 120px;

    > aside {
      margin-top: 10px;
    }

    > h2 {
      font-family: Poppins;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
    }

    > p {
      font-family: Poppins;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
    }
  }
`
