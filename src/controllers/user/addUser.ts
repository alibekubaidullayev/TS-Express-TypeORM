import { Request, Response } from "express";

const addUser = async (req: Request, res: Response): Promise<void> => {
  res.status(200).json({ msg: "User added successfully" });
};

export default addUser;
