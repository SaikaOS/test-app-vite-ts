export const MyQuery = `query MyQuery($searchText: String!) {
  search(query: $searchText, type: REPOSITORY, first: 100) {
    edges {
      node {
        ... on Repository {
          name
          id
          stargazerCount
          description
          url
          languages(first: 10) {
            edges {
              node {
                name
              }
            }
          }
          owner {
            avatarUrl
            login
            url
          }
          updatedAt
          commitComments(first: 100) {
            nodes {
              commit {
                id
              }
              updatedAt
            }
          }
        }
      }
    }
  }
  viewer {
    repositories(first: 100) {
      nodes {
        name
        id
        stargazerCount
        description
        url
        languages(first: 10) {
          edges {
            node {
              name
            }
          }
        }
        owner {
          avatarUrl
          login
          url
        }
        updatedAt
      }
    }
  }
}`;
