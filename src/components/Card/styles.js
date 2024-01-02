import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 340px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  border-radius: 8px;
  border: 2px solid #000204;

  padding: 16px 48px;

  position: relative;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  @media (min-width: 768px) {
    min-height: 420px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 16px;
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};

  > .favoriteButton {
    position: absolute;
    right: 16px;
    top: 16px;
    font-size: 24px;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
  }

  > .cardBody {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 16px;

    > img {
      width: clamp(104px, 78.714px + 4.9505vw, 150px);
      height: clamp(104px, 78.714px + 4.9505vw, 150px);
      object-fit: cover;
      border-radius: 999px;
    }

    > span {
      font-family: Roboto;
      font-size: 16px;

      color: ${({ theme }) => theme.COLORS.LIGHT_SKY_BLUE};

      @media (min-width: 768px) {
        font-family: Roboto;
        font-size: 26px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
      }
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

export const DishLink = styled(Link)`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};

  display: flex;
  align-items: center;
  justify-content: center;

  > h2 {
    font-family: Poppins;
    font-size: 14px;
    text-align: center;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;

    @media (min-width: 768px) {
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 140%;
    }
  }
`

export const EditDish = styled(Link)`
  width: auto;
  position: absolute;
  right: 16px;
  top: 16px;

  > button {
    font-size: 24px;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
  }
`
