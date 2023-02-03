import styled from "styled-components"

import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"

import { Home, Login } from "Pages"
import { Header, Footer } from "Components"

const Layout = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 10px;
  background-color: tomato;
`

const Main = styled.main`
  background-color: green;
`

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Main>
        <Footer />
      </Layout>
    </BrowserRouter>
  )
}