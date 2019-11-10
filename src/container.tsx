import styled, { css } from "styled-components";
import { MarginPadding } from "./global-style";

const Container = styled.div<{
  maxWidth?: number;
  padding?: MarginPadding;
  margin?: MarginPadding;
}>`
  width: 100%;
  box-sizing: border-box;

  ${({ padding }) =>
    padding &&
    css`
      padding-top: ${padding.top}px;
      padding-right: ${padding.right}px;
      padding-bottom: ${padding.bottom}px;
      padding-left: ${padding.left}px;
    `}

  ${({ margin }) =>
    margin &&
    css`
      margin-top: ${margin.top}px;
      margin-right: ${margin.right}px;
      margin-bottom: ${margin.bottom}px;
      margin-left: ${margin.left}px;
    `}

  ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth}px;
      margin: 0 auto;
    `}
`;

export default Container;
