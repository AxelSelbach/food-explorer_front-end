import styled from 'styled-components'

export const Container = styled.header`
  width: 100vw;
  height: 15vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  justify-content: space-between;
`
