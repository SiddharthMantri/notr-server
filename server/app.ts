import express from "express";

import { ApolloServer, gql } from "apollo-server-express";

const app = express();
const port = 8080;

const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

// The GraphQL schema in string form
const typeDefs = `
    type Query { books: [Book] }
    type Book { title: String, author: String }
  `;

// The resolvers
const resolvers = {
  Query: { books: () => books }
};

// Put together a schema
const server = new ApolloServer({
  typeDefs,
  resolvers
});
server.applyMiddleware({ app });
app.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
);
