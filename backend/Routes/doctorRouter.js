import express from "express";

import {
  UpdateDoctor,
  DeleteDoctor,
  GetAllDoctor,
  GetOneDoctor,
} from "../Controller/doctorController.js";
import { authentication, restrictTo } from "./../Controller/authVerify.js";

const router = express.Router();

router.get("/", GetAllDoctor);
router.get("/:id", GetOneDoctor);
router.delete("/:id", authentication, restrictTo(["doctor"]), DeleteDoctor);
router.put("/:id", authentication, restrictTo(["doctor"]), UpdateDoctor);

export default router;
