import { prismaClient } from "../core/db";

export interface UserPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

class UserService {
  public static createUser(payload: UserPayload) {
    return prismaClient.user.create({
      data: {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        password: payload.password,
      },
    });
  }
  public static getAllUsers() {
    return prismaClient.user.findMany();
  }
}

export default UserService;
