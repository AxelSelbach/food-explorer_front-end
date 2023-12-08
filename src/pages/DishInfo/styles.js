import styled from 'styled-components'

export const Container = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: grid;
  grid-template-rows: 10dvh 80dvh 10dvh;
  grid-template-areas:
    'header'
    'content'
    'footer';

  grid-area: content;
`
export const Content = styled.main`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 320px;
  flex-wrap: wrap;

  font-family: Poppins;
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};

  padding: 16px 24px;

  .dishDetails {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
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
      gap: 24px;
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
