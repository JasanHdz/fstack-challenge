import styled from "styled-components"

const WrapperStyled = styled.div`
  margin: 0 auto;
  padding: 1rem;
  max-width: ${({ maxWidth }) => maxWidth || '1280px'};
  @media screen and (min-width: 1280px) {
    padding: 1rem 80px;
  }
`

function Wrapper({ children, className }) {
  return (
    <WrapperStyled className={className}>
      {children}
    </WrapperStyled>
  )
}

export default Wrapper
