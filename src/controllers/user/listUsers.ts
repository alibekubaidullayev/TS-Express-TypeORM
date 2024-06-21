import { Request, Response } from "express";
import { AppDataSource } from "../../core/db";
import { User } from "../../entity/User";

const listUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export default listUsers;
