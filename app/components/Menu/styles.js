 /* global __CONFIG__ */

import styled from 'styled-components'

const backgroundColor = __CONFIG__.cssVariables.backgroundColor
const mapColor = __CONFIG__.cssVariables.mapColor

export const Buttons = styled.nav`
  margin: 0 5px;
  display: flex;

  & > * {
    display: inline-block;
    padding: 5px 12px 5px 12px;
    background-color: ${mapColor};
  }

  & > *:first-child {
    border-radius: 3px 0 0 3px;
  }

  & > *:last-child {
    border-radius: 0 3px 3px 0;
  }

  & a.selected,
  & a:hover {
    opacity: 1;
    background-color: ${backgroundColor};
  }
`
