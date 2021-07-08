import styled from "styled-components"

const AvatarStyled = styled.figure`
    border-radius: 50%;
    background-color: var(--secondary);
    overflow: hidden;
    padding: 2px;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    border: 1px solid var(--primary);
    /* height: auto; */
  img {
    object-fit: cover;
    border-radius: inherit;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
  }
`

function Avatar({size, url}) {
  return (
    <AvatarStyled size={size}>
      <img src={url} alt="avatar" />
    </AvatarStyled>
  )
}

Avatar.defaultProps = {
  size: '62px',
  url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
}

export default Avatar
