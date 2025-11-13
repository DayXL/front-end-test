import { gql } from '@apollo/client';

const GET_USER_DATA = gql`
  query GetUserAndRepos($login: String!){
    user(login: $login) {
      name
      avatarUrl
      repositories(first: 10, orderBy: { field: UPDATED_AT, direction: DESC }) {
        totalCount
        nodes {
          name
          defaultBranchRef {
            target {
              ... on Commit {
                history(first: 1) {
                  totalCount
                  nodes {
                    message
                    oid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export { GET_USER_DATA };
