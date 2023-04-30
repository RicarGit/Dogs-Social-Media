import styled from "styled-components/macro"
import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"

import { UserContextProvider } from "contexts/UserContext"

import { Home, Login, User, NotFound, UserProfile } from "Pages"
import { Header, Footer, Photo } from "Components"
import { PrivateRoute } from "routes/PrivateRoute"

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh + 6rem);
`

const Main = styled.main`
  flex: 1;
`

export function App() {
  return (
    <AppContainer>
      <BrowserRouter>
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
      </BrowserRouter>
    </AppContainer>
  )
}