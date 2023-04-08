import styled from "styled-components/macro"
import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"

import { UserContextProvider } from "contexts/UserContext"

import { Home, Login, User, NotFound, UserProfile } from "Pages"
import { Header, Footer, Photo } from "Components"
import { PrivateRoute } from "Components/PrivateRoute"

const Main = styled.main`
  padding: 0 1rem;
  max-width: 800px;
  margin: 2rem auto 0 auto;
`

export function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route path="foto/:id" element={<Photo />} />
            <Route path="perfil/:user" element={<UserProfile />} />
            <Route path="conta/*" element={
              <PrivateRoute>
                <User />
              </PrivateRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Main>
        <Footer />
      </UserContextProvider>
    </BrowserRouter>
  )
}