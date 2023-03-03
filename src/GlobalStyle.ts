import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    padding-top: 4rem;
    color: #333;
    --type-first: Helvetica, Arial, sans-serif;
    --type-second: 'Spectral', Georgia;
    font-family: var(--type-first);
  }

  img {
    display: block;
    max-width: 100%;
  }
  
  button,
  input {
    display: block;
    font-size: 1rem;
    font-family: var(--type-first);
    color: #333;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  h1 {
      font-family: var(--type-second);
      line-height: 1;
      font-size: 3rem;
      margin: 1rem 0;
      position: relative;
    }

  h1::after {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background-color: #fb1;
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
  }

  .animeLeft {
    animation: animeLeft .3s forwards;
  }

  @keyframes animeLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: initial;
    }
  }
  `