import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  border-radius: 8px;
  padding: 10px 16px;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.DARK_SLATE_GRAY};
  color: ${({ theme }) => theme.COLORS.COLOR_WHITE};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.DARK_SLATE_GRAY}` : 'none'};

  > button {
    border: none;
    background: none;
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`
