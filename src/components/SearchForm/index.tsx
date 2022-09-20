import { SearchFormContainer, SearchInput } from "./styles"

interface SearchFormProps {
  value: string
  setValue: (value: string) => void
}

export function SearchForm({ value, setValue }: SearchFormProps) {
  return (
    <SearchFormContainer>
      <div>
        <h1>Publicações</h1>
        <span>6 publicações</span>
      </div>
      <SearchInput type="text" placeholder="Buscar conteúdo" value={value} onChange={(e) => setValue(e.target.value)} />
    </SearchFormContainer>
  )
}