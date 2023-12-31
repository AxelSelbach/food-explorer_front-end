/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 48px;
  background-color: ${props => props.$backgroundcolor};
  color: ${({ theme }) => theme.COLORS.COLOR_WHITE};

  border-radius: 5px;
  border: none;

  padding: 12px 24px;

  font-family: Poppins;
  font-size: 14px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`
