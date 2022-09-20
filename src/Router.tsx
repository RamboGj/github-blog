import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from './pages/Home'
import { Post } from './pages/Post/[id]'

export function Router() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}