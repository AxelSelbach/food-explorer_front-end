import styled from 'styled-components'

export const Container = styled.div`
  height: 100dvh;
  width: 100dvw;
  margin-top: 80px;

  font-family: Roboto;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: flex;
  flex-direction: column;
  align-items: stretch;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 32px;

  padding: 40px 48px;

  > .title {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 66px;

    color: ${({ theme }) => theme.COLORS.COLOR_WHITE};

    h1 {
      font-family: Roboto;
      font-size: 32px;
    }

    > svg {
      font-size: 32px;
    }
  }

  > .inputWrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  }

  svg {
    color: ${({ theme }) => theme.COLORS.CYAN_ORIENT};
  }
`
