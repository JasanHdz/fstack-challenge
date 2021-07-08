import React from 'react'
import ReactDOM from 'react-dom'
import Home from './App'
import BaseStyles from './components/global-styled'
import UserProvider from './context/user-context'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if(graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      return alert(`Graphql error ${message}`)
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({ uri: "https://graphql-form.herokuapp.com/graphql" })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function App() {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <BaseStyles theme={{}} />
        <Home />
      </UserProvider>
    </ApolloProvider>
  )
}
