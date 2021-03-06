/* global __CONFIG__ */

import styled from 'styled-components'

const backgroundColor = __CONFIG__.cssVariables.backgroundColor
const mapColor = __CONFIG__.cssVariables.mapColor

export const StyledForm = styled.form`
  background-color: ${mapColor};
  border-radius: 3px;
  padding: 10px;

  & input[type=text] {
    width: 100%;
    background-color: ${backgroundColor};
    padding: .3em .5em;
    border-radius: 3px;
  }

  & button {
    margin-top: 10px;
  }
`

export const InputContainer = styled.div`
  padding: 10px;
`

export const Fieldset = styled.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`

export const Decades = styled.div`
  padding: 10px;
  display: flex;
  // justify-content: space-between;
  flex-wrap: wrap;
  user-select: none;

  & > div {
    width: 100px;
  }

  & label {
    display: inline-block;
    text-align: center;
    margin-left: 10px;
    cursor: pointer;
  }

  & input:focus ~ label {
    outline-color: #ffd72e;
    outline-style: solid;
  }
`
