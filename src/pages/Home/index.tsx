import { useEffect, useState } from "react"
import { ProfileCard, ProfileCardProps } from "../../components/ProfileCard"
import { RepositoryCard } from "../../components/RepositoryCard"
import { SearchForm } from "../../components/SearchForm"
import { api } from "../../services/axios"
import { HomeContainer, RepositoriesListContainer } from "./styles"

export interface ReposProps {
  id: number
  name: string
  html_url: string
  description?: string | null
}

export function Home() {
  const [profileData, setProfileData] = useState<ProfileCardProps>()
  const [repos, setRepos] = useState<ReposProps[]>([])
  const [query, setQuery] = useState<string>('')

  async function getProfileData() {
    const response = await api.get('https://api.github.com/users/RamboGj')
    setProfileData(response.data)
  }

  async function listRepositories(query?: string) {
    const response = await api.get(`https://api.github.com/users/RamboGj/repos`, {
      maxContentLength: 20
    })
    console.log(query)
    setRepos(response.data)
  }

  useEffect(() => {
    getProfileData()
    listRepositories()
  }, [])

  useEffect(() => {
    listRepositories(query)
  }, [query])

  return (
    <HomeContainer>
      {profileData && 
        <ProfileCard data={profileData} />
      }
      <SearchForm 
        value={query}
        setValue={setQuery}
      />

      <RepositoriesListContainer>
        {repos.map((repo) => {
          return (
            <RepositoryCard 
              key={repo.id}
              html_url={repo.html_url}
              name={repo.name}
              description={repo.description}
              id={repo.id}
            />
          )
        })}
      </RepositoriesListContainer>
    </HomeContainer>
  )
}