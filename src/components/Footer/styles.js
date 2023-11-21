import styled from 'styled-components'

export const Container = styled.footer`
  width: 100vw;
  height: 10vh;
  padding: 24px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  > div {
    color: ${({ theme }) => theme.COLORS.DARK_SLATE_GRAY};
    font-family: Roboto;
    font-size: 12px;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
    font-family: DM Sans;
    font-size: 12px;
    font-weight: 400;
  }
`
