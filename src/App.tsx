import styled from "styled-components/macro"
import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router"
import { PrivateRoute } from "routes/PrivateRoute"

import { Home, Login, User, NotFound, UserProfile } from "Pages"
import { Header, Footer, Photo } from "Components"
import { useCallback, useEffect } from "react"
import { useContextStore } from "contexts/useContextStore"

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh + 6rem);
`

const Main = styled.main`
  flex: 1;
`

export function App() {
  const autoLogin = useContextStore(useCallback(state => state.autoLogin, []))

  useEffect(() => {
    autoLogin()
  }, [autoLogin])

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