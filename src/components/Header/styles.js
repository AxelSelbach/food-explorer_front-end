import styled, { keyframes } from 'styled-components'

const falling = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  50% {
    opacity: 0.5;
    transform: translateX(-50%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }

`

const goingUp = keyframes`
    0% {
    opacity: 1;
    transform: translateX(0);
  }

  50% {
    opacity: 0.5;
    transform: translateX(-50%);
  }

  100% {
    opacity: 0;
    transform: translateX(-100%);
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

  > .Content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: inherit;
  }

  .burguerMenu {
    width: 32px;
    border: none;
  }

  .burguerMenu:before,
  .burguerMenu:after,
  .burguerMenu div {
    background: ${({ theme }) => theme.COLORS.COLOR_WHITE};
    content: '';
    display: block;
    height: 4px;
    border-radius: 3px;
    margin: 7px 0;
    transition: 0.5s;
  }

  .active {
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

  .menu {
    width: 100dvw;
  }

  menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;

    > p {
      color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
    }
  }

  .closeMenu {
    background-color: transparent;
    width: 32px;
    border: none;
  }

  .closeMenu::before,
  .closeMenu::after {
    content: '';
    background: ${({ theme }) => theme.COLORS.COLOR_WHITE};
    display: block;
    height: 4px;
    border-radius: 3px;
    margin: 7px 0;
    transition: 0.5s;
  }

  .closeMenu::before {
    transform: translateY(2px) rotate(135deg);
  }
  .closeMenu::after {
    transform: translateY(-9px) rotate(-135deg);
  }

  .opennedMenu {
    opacity: 0;
    animation: ${falling} 300ms ease-in forwards;
    position: absolute;
    top: 92px;
    left: 0;
    height: 80dvh;
    width: 100dvw;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }

  .opennedMenu .active {
    animation: ${goingUp} 300ms ease-in-out;
  }

  .opennedMenuContent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 36px 28px;

    ul {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;

      li {
        list-style: none;
      }
    }
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: #192227;
  }
`
