import styled from 'styled-components'

export const Container = styled.footer`
  width: 100vw;
  grid-area: footer;
  display: flex;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1280px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 24px 20px;

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
