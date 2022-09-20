import styled from "styled-components"

export const RepositoryCardContainer = styled.div`
  max-width: 416px;
  height: 246px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  background: ${props => props.theme['blue-700']};
  transition: 500ms;
  cursor: pointer;

  p {
    margin-top: 1.25rem;
  }

  &:hover {
    scale: 105%;
    overflow: hidden;
  } 

`

export const RepositoryCardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: ${props => props.theme['white']}
  }
`