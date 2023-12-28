import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  padding: 16px;
  gap: 16px;

  > h3 {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 18px;

    color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  }

  > menu {
    width: 100%;
    height: 360px;
  }
`
