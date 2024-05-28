import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import express from "express";

const app = express();
const port = 8000;

app.use(express.json());

async function init() {
  const gqlServer = new ApolloServer({
    typeDefs: `
     type Query {
      hello: String
      test(name:String): String
     }
    `, //schema
    resolvers: {
      Query: {
        hello: () => `Welcome to GraphQl Server`,
        test: (_, { name }: { name: string }) => `Hey ${name} how are you!`,
      },
    },
  });

  await gqlServer.start();

  app.get("/", (req, res) => {
    return res.status(200).send({ message: "Health checkUp" });
  });

  app.use("/graphql", expressMiddleware(gqlServer));

  app.listen(port, () => {
    console.log(`App is running on port ${port}`);
  });
}

init();
