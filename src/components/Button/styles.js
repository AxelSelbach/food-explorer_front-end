import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 48px;
  color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
  background-color: ${({ theme, $isactive }) =>
    $isactive ? theme.COLORS.BACKGROUND_600 : theme.COLORS.BACKGROUND_BUTTON};

  border-radius: 5px;
  border: none;

  padding: 12px 24px;

  font-family: Poppins;
  font-size: 14px;

  display: flex;
  align-items: center;
  justify-content: center;
`
