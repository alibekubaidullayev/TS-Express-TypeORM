import { Request, Response } from "express";

const createUser = async (req: Request, res: Response): Promise<void> => {
  res.status(200).json({ msg: "AAA" });
};

export default createUser;
