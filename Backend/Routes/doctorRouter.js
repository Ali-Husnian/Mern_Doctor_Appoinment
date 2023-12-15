import express from "express";

import {
  UpdateDoctor,
  DeleteDoctor,
  GetAllDoctor,
  GetOneDoctor,
} from "../Controller/doctorController.js";

import { authentication, restrictTo } from "./../Controller/authVerify.js";
import reviewRouter from "./reviewRouter.js";

const router = express.Router();
// nested route
router.use("/:doctorId/reviews", reviewRouter);

router.get("/", GetAllDoctor);
router.get("/:id", GetOneDoctor);
router.delete("/:id", authentication, restrictTo(["doctor"]), DeleteDoctor);
router.put("/:id", authentication, restrictTo(["doctor"]), UpdateDoctor);

export default router;
