export const typeDefs = `#graphql
  type Game {
    id:ID!
    title:String!
    platform:[String!]!
  }
  type Review {
    id:ID!
    rating:Int!
    content:String!
    authorId: ID!
    gameId:ID!
  }
  type Author {
    id:ID!
    name:String!
    verified:Boolean!
  }
  type Query{
    reviews:[Review]
    games:[Game]
    authors:[Author]
    author(id:ID!):Author
  }
  type Mutation{
    deleteGame(id:ID!): [Game]
    addGame(id:ID!,title:String!,platform:[String]): [Game]
  }
`;
