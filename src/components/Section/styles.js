import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;

  > h3 {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 18px;
    line-height: 140%;
    margin-top: 24px;

    color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};

    @media (min-width: 768px) {
      font-size: 24px;
      font-style: normal;
    }
  }

  > menu {
    width: 100%;
    height: auto;
  }
`
