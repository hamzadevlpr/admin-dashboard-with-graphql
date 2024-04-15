import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { gql } from "graphql-tag";
import axios from "axios";

const typeDefs = gql`
  type Todo {
    id: ID!
    title: String!
    done: Boolean!
  }

  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
    phone: String!
  }

   type Query {
    getTodos: [Todo]!
    getUsers: [User]!
    getUser(id: ID!): User
    }
`;

const resolvers = {
    Query: {
        getTodos: async () => (await axios.get("https://jsonplaceholder.typicode.com/todos")).data,
        getUsers: async () => (await axios.get("https://jsonplaceholder.typicode.com/users")).data,
        getUser: async (parent: any, {id}: any) => (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data,
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
    context: async req => ({ req }),
});

export { handler as GET, handler as POST };