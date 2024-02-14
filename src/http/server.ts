import fastify from "fastify";
import { createPoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-polls";
import { voteOnPoll } from "./routes/vote-on-poll";
import cookie from "@fastify/cookie";

const app = fastify();

app.register(cookie, {
  secret: "polls-app", // secret, criptografar o cookie, impossibilidando a assinatura de outro usuario.
  hook: "onRequest", // antes de todsa as requisições do back end, esse plugin entra em ação e faz o parse dos cookies.
});

app.register(createPoll);
app.register(getPoll);
app.register(voteOnPoll);

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP running server");
});
