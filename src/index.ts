import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import express from "express";
import { typeDefs } from "./schema/typeDefs";
import { games, authors, review } from "./dummy";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

async function init() {
  let game = [];
  const resolvers = {
    Query: {
      games: () => games,
      authors: () => authors,
      reviews: () => review,
      author: (_: any, args: { id: number }) => {
        return authors.find((i) => i.id == args.id);
      },
    },
    Mutation: {
      deleteGame(_: any, args: any) {
        const filteredGames = games.filter((g) => g.id != args.id);
        return filteredGames;
      },
      addGame(_: any, args: { id: string; title: string; platform: string[] }) {
        const newGame = {
          id: args.id,
          title: args.title,
          platform: args.platform,
        };
        console.log("mew", newGame);
        game.push(newGame);
        return game;
      },
    },
  };
  const gqlServer = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
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
