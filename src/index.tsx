import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './GlobalStyle'
import { App } from './App'

const root = createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
)