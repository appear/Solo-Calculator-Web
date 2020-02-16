import styled, { css } from 'styled-components'
import { getColor, ColorString } from './color'

const Text = styled.div<{
  margin?: string
  size?: string
  bold?: boolean
  color?: ColorString
}>`
  ${({ size }) => css`
    font-size: ${size || 13}px;
  `}

  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}

  ${({ color }) =>
    color &&
    css`
      color: rgba(${getColor(color)});
    `}   
`

export default Text
