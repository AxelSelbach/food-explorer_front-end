import styled from 'styled-components'

export const Container = styled.footer`
  width: 100vw;
  height: 20vh;
  display: flex;
  flex-direction: row;
  gap: 8px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  > div {
    color: ${({ theme }) => theme.COLORS.DARK_SLATE_GRAY};
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: right;
    font-family: DM Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`
