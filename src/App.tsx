import styled from "styled-components/macro"

import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"

import { UserContextProvider } from "contexts/UserContext"

import { Home, Login } from "Pages"
import { Header, Footer } from "Components"

const Main = styled.main`

`

export function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
        </Main>
        <Footer />
      </UserContextProvider>
    </BrowserRouter>
  )
}