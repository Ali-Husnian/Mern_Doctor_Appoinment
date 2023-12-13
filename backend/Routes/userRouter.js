import express from "express";

import {
  UpdateUser,
  DeleteUser,
  GetOneUser,
  GetAllUsers,
} from "../Controller/userController.js";

const router = express.Router();

router.get("/", GetAllUsers);
router.get("/:id", GetOneUser);
router.delete("/:id", DeleteUser);
router.put("/:id", UpdateUser);

export default router;
