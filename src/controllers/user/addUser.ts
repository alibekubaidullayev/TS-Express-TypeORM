import { Request, Response } from "express";
import { AppDataSource } from "../../core/db";
import { User } from "../../entity/User";

const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, age } = req.body;

    if (!name || !age) {
      res.status(400).json({ msg: "Missing required fields" });
      return;
    }

    const userRepository = AppDataSource.getRepository(User);
    const user = new User();
    user.name = name;
    user.age = age;

    await userRepository.save(user);

    res.status(200).json({ msg: "User added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export default addUser;
