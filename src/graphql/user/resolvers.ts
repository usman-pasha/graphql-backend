import userService, { UserPayload } from "../../services/user";
const queries = {
  hello: async () => {
    const response = await userService.getAllUsers();
    let user;
    response.forEach((a) => {
      user = a.id;
    });
    return user;
  },
};

const mutations = {
  createUser: async (_: any, payload: UserPayload) => {
    const response = await userService.createUser(payload);
    return response.email;
  },
};

export const resolvers = { queries, mutations };
