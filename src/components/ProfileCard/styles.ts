import styled from "styled-components"

export const CardContainer = styled.div`
  width: 100%;
  max-width: 864px;
  
  background: ${props => props.theme['blue-700']};
  border-radius: 10px;
  padding: 2rem 2.25rem;
  margin-top: -10rem;
  position: absolute;
`

export const CardContentContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 2rem;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }

  p {
    margin-top: 0.5rem;
  }
`

export const ContentDiv = styled.div`
  width: 100%;
`

export const ContentHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  a {
    appearance: none;
    text-decoration: none;
    display: flex;
    gap: 0.5rem;
    align-items: flex-end;

    color: ${props => props.theme['blue-500']};
    font-weight: bold;
    cursor: pointer;

    &:hover {
      color: ${props => props.theme['blue-300']};
      transition: color 500ms;
    }
  }

  h1 {
    color: ${props => props.theme['white']};
    display: flex;
    align-items: flex-start;
  }
`

export const CardFooter = styled.footer`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${props => props.theme['blue-400']}
    }

  }

`