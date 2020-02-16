import styled, { css } from 'styled-components'
import { MarginPadding } from './global-style'

const Text = styled.div<{
  margin?: MarginPadding
}>`
  ${({ margin }) =>
    margin &&
    css`
      margin-top: ${margin.top}px;
      margin-right: ${margin.right}px;
      margin-bottom: ${margin.bottom}px;
      margin-left: ${margin.left}px;
    `}
`

export default Text
