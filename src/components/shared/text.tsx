import styled, { css } from 'styled-components'

const Text = styled.div<{
  margin?: string
}>`
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
`

export default Text
