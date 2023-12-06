import styled from 'styled-components'

export const Container = styled.div`
  height: 100dvh;
  width: 100dvw;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 80px 32px;
`
