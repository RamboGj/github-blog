import { ReposProps } from '../../pages/Home'
import { RepositoryCardContainer, RepositoryCardHeader } from './styles'
import { useNavigate } from 'react-router-dom'

export function RepositoryCard({ name, description, id }: ReposProps) {
  const navigate = useNavigate()

  return (
      <RepositoryCardContainer onClick={() => navigate(`/post/${id}`)}>
        <RepositoryCardHeader>
          <h1>{name}</h1>
          <span>Há 1 dia</span>
        </RepositoryCardHeader>
        <p>{description ? description : 'Não há descrição nesse projeto.'}</p>
      </RepositoryCardContainer>
  )
}