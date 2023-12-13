import express from "express";

import {
  UpdateUser,
  DeleteUser,
  GetOneUser,
  GetAllUsers,
} from "../Controller/userController.js";
import { authentication, restrictTo } from "../Controller/authVerify.js";

const router = express.Router();

router.get("/", authentication, restrictTo(["admin"]), GetAllUsers);
router.get("/:id", authentication, restrictTo(["patient"]), GetOneUser);
router.delete("/:id", authentication, restrictTo(["patient"]), DeleteUser);
router.put("/:id", authentication, restrictTo(["patient"]), UpdateUser);

export default router;
