import styled from 'styled-components'

export const Container = styled.div`
  width: 100dvw;
  height: 100dvh;
  padding: 24px 32px;
  display: grid;
  grid-template-rows: 10dvh 80dvh 10dvh;
  grid-template-areas:
    'header'
    'content'
    'footer';

  grid-area: content;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 24px;
`
