import styled from "styled-components"

export const SearchFormContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin-top: 8rem;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: ${props => props.theme['white']};
      font-size: 1.25rem;
    }
  }
`

export const SearchInput = styled.input`
  border: 1px solid ${props => props.theme['blue-700']};
  margin-top: 0.75rem;
  display: flex;
  flex: 1;

  padding: 1rem;
  background: ${props => props.theme['blue-900']};
  border-radius: 6px;

  &::placeholder {
    color: ${props => props.theme['blue-400']}
  }

`