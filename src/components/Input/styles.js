import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 14px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  color: ${({ theme }) => theme.COLORS.COLOR_WHITE};

  border-radius: 5px;
  padding: 12px 14px;

  > input {
    height: 16px;
    width: 100%;
    border: 0;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.COLOR_WHITE};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
    }

    &:focus {
      outline: none;
    }
  }
`
