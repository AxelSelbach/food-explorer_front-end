import styled from 'styled-components'

export const Container = styled.header`
  width: 100vw;
  height: 15vh;
  grid-area: header;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 56px 28px 24px;

  > .center {
    width: 50px;
    border: none;
  }

  .center:before,
  .center:after,
  .center div {
    background: ${({ theme }) => theme.COLORS.COLOR_WHITE};
    content: '';
    display: block;
    height: 6px;
    border-radius: 3px;
    margin: 7px 0;
    transition: 0.5s;
  }
  .center:hover:before {
    transform: translateY(12px) rotate(135deg);
  }
  .center:hover:after {
    transform: translateY(-12px) rotate(-135deg);
  }
  .center:hover div {
    transform: scale(0);
  }

  > .centerLogo {
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

  > button {
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
`
