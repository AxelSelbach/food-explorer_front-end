import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 300px;

  border-radius: 8px;
  border-color: #000204;

  padding: 24px;

  position: relative;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};

  > .favoriteButton {
    position: absolute;
    right: 16px;
    top: 16px;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
  }

  > .cardBody {
    > img {
      width: clamp(104px, 78.714px + 4.9505vw, 150px);
      height: clamp(104px, 78.714px + 4.9505vw, 150px);
      object-fit: cover;
    }

    > h2 {
      font-family: Poppins;
      font-size: 14px;

      text-align: center;
    }

    > p {
      font-family: Roboto;
      font-size: 16px;

      color: ${({ theme }) => theme.COLORS.LIGHT_SKY_BLUE};
    }

    > .quantitySelect {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      gap: 14px;

      > .minusBtn,
      .plusBtn {
        border: none;
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
      }
    }
  }
`
