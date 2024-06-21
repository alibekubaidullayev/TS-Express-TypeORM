import { Request, Response } from "express";
import { AppDataSource } from "../../core/db";
import { User } from "../../entity/User";

const patchUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    const { name, age } = req.body;

    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({ id: id });

    if (!user) {
      res.status(404).json({ msg: "User not found" });
      return;
    }

    if (name) user.name = name;
    if (age) user.age = age;

    await userRepository.save(user);

    res.status(200).json({ msg: "User updated successfully", user: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export default patchUser;
