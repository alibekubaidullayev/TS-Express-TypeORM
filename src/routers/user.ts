import { Router } from "express";

import addUser from "../controllers/user/addUser";
import deleteUser from "../controllers/user/deleteUser";
import getUser from "../controllers/user/getUser";
import listUsers from "../controllers/user/listUsers";
import patchUser from "../controllers/user/patchUser";

const router = Router();

router.post("/users", addUser);
router.get("/users", listUsers);
router.get("/users/:id", getUser);
router.patch("/users/:id", patchUser);
router.delete("/users/:id", deleteUser);

export default router;
