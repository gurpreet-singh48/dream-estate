import { Request, Response } from "express";

export const test = async (req: Request, res: Response) => {
  console.log(req.body);
  res.send({ message: "Server is working fine!" });
};
