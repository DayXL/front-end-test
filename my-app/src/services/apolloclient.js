
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { token } from '../../graphql.env';

const link = new HttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

export default client;
