import styled from 'styled-components'

export const Container = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  padding: 4px 8px;

  color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};

  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`
