import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import express from "express";
import { prismaClient } from "./core/db";
import createApolloGraphqlServer from "./graphql";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

async function init() {

  app.get("/", (req, res) => {
    return res.status(200).send({ message: "Health checkUp" });
  });

  app.use("/graphql", expressMiddleware(await createApolloGraphqlServer()));

  app.listen(port, () => {
    console.log(`App is running on port ${port}`);
  });
}

init();
