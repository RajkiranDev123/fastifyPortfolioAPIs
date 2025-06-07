import { postSay,getSays } from "../controllers/portfolio.controller.js";

async function routes(fastify, options) {
  fastify.post("/postSay", postSay);
  fastify.get("/getSays", getSays);

}


export default routes



