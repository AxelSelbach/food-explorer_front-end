import styled from 'styled-components'

export const Container = styled.section`
  > h3 {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: clamp(1.8rem, 0.727rem + 1.489vw, 2.5rem);
    line-height: 140%;

    margin-bottom: 38px;

    color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  }
`
