import { ArrowSquareOut, GithubLogo, Buildings, Users  } from "phosphor-react"
import { CardContainer, CardContentContainer, CardFooter, ContentHeader, ContentDiv } from "./styles"

export interface ProfileCardProps {
  login: string,
  avatar_url: string
  html_url: string
  name: string
  company: string
  bio: string
  followers: number
}

interface Props {
  data: ProfileCardProps
}

export function ProfileCard({ data }: Props) {
  return (
    <CardContainer>
      <CardContentContainer>
        <img src={data.avatar_url} alt="" />
        <ContentDiv>
          <ContentHeader>
              <h1>{data.name}</h1>
              <a 
                href={data.html_url}
                target="_blank"
              >
                <p>GITHUB</p>
                <ArrowSquareOut  size={24}/>
              </a> 
          </ContentHeader>
          <p>
            {data.bio}
          </p>
          <CardFooter>
            <span>
              <GithubLogo size={24}/>
              <p>{data.login}</p>
            </span>
            <span>
              <Buildings size={24}/>
              <p>{data.company}</p>
            </span>
            <span>
              <Users size={24}/>
              <p>{data.followers} seguidores</p>
            </span>
          </CardFooter>
        </ContentDiv>
      </CardContentContainer>
    </CardContainer>
  )
}