import styled, { css } from 'styled-components'

const Container = styled.div<{
  maxWidth?: number
  padding?: string
  margin?: string
}>`
  width: 100%;
  box-sizing: border-box;

  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}

  ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth}px;
      margin: 0 auto;
    `}
`

export default Container
