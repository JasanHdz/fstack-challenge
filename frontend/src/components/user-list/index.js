import styled from "styled-components"
import Wrapper from '../common/wrapper'
import User from './user'
import { UserContext } from '../../context/user-context'
import { useContext } from "react"

const WrapperStyled = styled(Wrapper)`
  padding: 1rem;
`

const UsersStyled = styled.div`
  height: 100vh;
  overflow-y: auto;
  background-color: var(--primary);
  width: 100%;
  display: none;
  @media screen and (min-width: 768px) {
    display: initial;
    max-width: 300px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 430px;
  }
`

function Index() {
  const { users } = useContext(UserContext)
  return (
    <UsersStyled>
      <WrapperStyled>
        <h1>Users All</h1>
        <section>
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </section>
      </WrapperStyled>
    </UsersStyled>
  )
}

export default Index
