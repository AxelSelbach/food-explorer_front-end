import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;

  > label {
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    color: ${({ theme }) => theme.COLORS.PEARL_GRAY};
  }
`

export const SelectWrapper = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  height: 40px;
  border-radius: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > select {
    width: 100%;
    padding: 16px;
    appearance: none;

    color: ${({ theme }) => theme.COLORS.PEARL_GRAY};
    border: none;
    background-color: transparent;

    font-size: 14px;
    font-family: Roboto;
    padding: 16px;

    outline: none;

    > option {
      width: 100%;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    }
  }

  svg {
    margin-right: 24px;
    font-size: 24px;
  }
`
