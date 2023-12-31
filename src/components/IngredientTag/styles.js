import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 45%;

  border-radius: 8px;
  padding: 4px 8px;

  background-color: ${({ theme, isnew }) =>
    isnew ? 'transparent' : theme.COLORS.DARK_SLATE_GRAY};
  color: ${({ theme }) => theme.COLORS.COLOR_WHITE};

  border: ${({ theme, isnew }) =>
    isnew ? `1px dashed ${theme.COLORS.DARK_SLATE_GRAY}` : 'none'};

  button {
    border: none;
    background: none;

    color: ${({ theme, isnew }) =>
      isnew ? theme.COLORS.LIGHT_SLATE_GRAY : theme.COLORS.COLOR_WHITE};
  }

  > input {
    height: 24px;
    width: 100%;

    font-family: Roboto;
    font-size: 16px;
    padding: 12px;

    color: ${({ theme }) => theme.COLORS.COLOR_WHITE};;
    background-color: ${({ theme, isnew }) =>
      isnew ? 'transparent' : theme.COLORS.DARK_SLATE_GRAY};

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_SLATE_GRAY};
      font-family: Roboto;
      font-size: 16px;
    }

    &:focus {
      outline: none;
    }
  }
`
