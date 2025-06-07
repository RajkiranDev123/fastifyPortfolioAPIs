import Portfolio from "../models/user.model.js";

export async function postSay(request, reply) {
  try {
    const say =  new Portfolio(request.body);// create user
    const result = await say.save();
    reply.status(201).send(result);
  } catch (error) {
    console.log("error==>", error)
    reply.status(500).send(error);//automatically sends error.message
  }
}
export async function getSays(request, reply) {
  try {
    const getSays = await Portfolio.find(); //get user by id
    reply.send(getSays);
  } catch (error) {
    reply.status(500).send(error);
  }

}
// 

