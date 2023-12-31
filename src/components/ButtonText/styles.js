import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
  border: none;

  display: flex;
  align-items: center;

  font-family: Poppins;
  font-size: 18px;
`
