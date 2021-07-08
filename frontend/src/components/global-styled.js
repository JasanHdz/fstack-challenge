import { createGlobalStyle } from 'styled-components'

const DefaultStyles = createGlobalStyle`
  :root {
    --bgPrimary: #f174dc;
    --primary: #f14282;
    --gray: #f0f0f0;
  }
  body, figure {
    margin: 0;
  }
  body {
    font-family: var(--primaryFont);
    font-size: 16px;
  }
  .buttons {
    display: flex;
  }
  .form {
    display: grid;
    grid-template-columns: 62px 1fr;
    grid-column-gap: 10px;
  }
  .flex {
    display: flex;
  }
`

export default function GlobalStyles({ theme }) {
  return (
    <DefaultStyles {...theme} />
  )
}
