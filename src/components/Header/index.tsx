import coverImage from '../../assets/cover.svg'
import { CoverContainer } from './styles'
import { Outlet } from 'react-router-dom'

export function Header() {
  return (
    <>
    <CoverContainer>
      <img src={coverImage} alt="" />
    </CoverContainer>
    <Outlet />
    </>
  )
}