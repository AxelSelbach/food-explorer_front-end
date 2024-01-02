import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const Container = styled.header`
  width: 100dvw;
  display: grid;
  align-items: center;
  align-content: center;
  grid-area: header;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 28px 24px;
  z-index: 999;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  .Content {
    max-width: 1280px;
    width: 100%;

    display: flex;
    flex-direction: row;

    > p {
      font-family: Roboto;
      font-size: 18px;
      align-self: center;

      color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
    }

    @media (min-width: 768px) {
      gap: 32px;
      justify-content: center;
    }
  }

  .mobileMenu {
    width: auto;
    border: none;

    > div {
      width: 32px;
      height: 2px;
      background: ${({ theme }) => theme.COLORS.COLOR_WHITE};
      margin: 8px;
      transition: 0.3s;
    }

    > svg {
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
    }

    @media (min-width: 768px) {
      display: none;
    }
  }

  .mobileMenu.burguer .line1 {
    transform: rotate(-135deg) translateY(-14px);
  }

  .mobileMenu.burguer .line2 {
    scale: 0;
  }

  .mobileMenu.burguer .line3 {
    transform: rotate(135deg) translateY(14px);
  }

  .active,
  .centerLogo.active {
    display: none;
  }

  .centerLogo {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    position: relative;

    > h1 {
      color: ${({ theme }) => theme.COLORS.COLOR_WHITE};

      font-family: Roboto;
      font-size: 21px;
      font-style: normal;
      font-weight: 700;
    }

    .adminSpan {
      color: ${({ theme }) => theme.COLORS.LIGHT_SKY_BLUE};

      font-family: Roboto;
      font-size: small;
      font-weight: 400;
      line-height: 160%;

      @media (min-width: 768px) {
        position: absolute;
        top: 48px;
        right: 16px;
      }
    }

    @media (min-width: 768px) {
      width: fit-content;
    }
  }

  nav {
    width: 100%;
    display: none;

    .requests,
    .newDish {
      width: max-content;
    }

    .logout {
      background-color: transparent;
      border: none;
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
    }

    @media (min-width: 768px) {
      display: flex;
      gap: 32px;
    }
  }

  .receipt {
    background-color: transparent;
    border: none;
    position: relative;

    > svg {
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
    }

    > .requestsNumber {
      position: absolute;
      top: -8px;
      right: -8px;
      width: 18px;
      padding: 2px;
      border-radius: 100%;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
      color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
    }

    @media (min-width: 768px) {
      display: none;
    }
  }

  .centerLogo,
  .receipt,
  .Content p {
    animation: ${fadeIn} 300ms linear;
  }
  .centerLogo.active,
  .receipt.active,
  .Content p.active {
    animation: ${fadeOut} 300ms linear;
  }

  .menu {
    position: absolute;
    top: 94px;
    left: 0;
    height: 100dvh;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    transform: translateX(-100%);
    transition: transform 300ms ease-in;
  }

  .menu.menuOpen {
    transform: translateX(0);
  }

  .opennedMenu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 36px 28px;

    ul {
      display: flex;
      flex-direction: column;
      width: 100%;

      li {
        list-style: none;
        margin: 26px 0 10px 0;
        padding-bottom: 10px;
        border-bottom: 1px solid gray;
      }
    }
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: #192227;
  }
`
export const Add = styled(Link)``
