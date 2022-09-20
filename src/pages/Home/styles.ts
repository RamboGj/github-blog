import styled from "styled-components"

export const HomeContainer = styled.main`
  max-width: 864px;
  margin: 0 auto;
  overflow: hidden;
`

export const RepositoriesListContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 3rem 0;
`