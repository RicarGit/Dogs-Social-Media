import styled from "styled-components/macro"

import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"

import { UserContextProvider } from "contexts/UserContext"

import { Home, Login } from "Pages"
import { Header, Footer } from "Components"

const Layout = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const Main = styled.main`

`

export function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Layout>
          <Header />
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/*" element={<Login />} />
            </Routes>
          </Main>
          <Footer />
        </Layout>
      </UserContextProvider>
    </BrowserRouter>
  )
}