import styled, { css } from 'styled-components'
import csstype from 'csstype'

const Container = styled.div<{
  maxWidth?: number
  padding?: string
  margin?: string
  flex?: number
  display?: csstype.DisplayProperty
}>`
  width: 100%;
  box-sizing: border-box;

  ${({ display }) =>
    display &&
    css`
      display: ${display};
    `}

  ${({ flex = 1 }) =>
    flex &&
    css`
      flex: ${flex};
    `}

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
