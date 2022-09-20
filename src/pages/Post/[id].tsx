import { useParams } from 'react-router-dom'

export function Post() {
  const params = useParams()

  console.log('param', params)

  return (
    <div>
      <h1>{params.toString()}</h1>
    </div>
  )
}