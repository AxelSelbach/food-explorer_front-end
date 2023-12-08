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
  grid-area: header;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 28px 24px;
  z-index: 999;

  > .Content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: inherit;

    > p {
      font-family: Roboto;
      font-size: 18px;

      color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
    }
  }

  .mobileMenu {
    width: 32px;
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
    display: flex;
    align-items: center;
    gap: 8px;

    > h1 {
      color: ${({ theme }) => theme.COLORS.COLOR_WHITE};

      font-family: Roboto;
      font-size: 21px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  .receipt,
  button {
    background-color: transparent;
    border: none;
    position: relative;

    > svg {
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
    }

    > .requestsNumber {
      position: absolute;
      top: -14px;
      right: -8px;
      width: 18px;
      padding: 2px;
      border-radius: 100%;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
      color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
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
    height: 80dvh;
    width: 100dvw;
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
      }
    }
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: #192227;
  }
`
