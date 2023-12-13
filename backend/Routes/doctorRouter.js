import express from "express";

import {
  UpdateDoctor,
  DeleteDoctor,
  GetAllDoctor,
  GetOneDoctor,
} from "../Controller/doctorController.js";

const router = express.Router();

router.get("/", GetAllDoctor);
router.get("/:id", GetOneDoctor);
router.delete("/:id", DeleteDoctor);
router.put("/:id", UpdateDoctor);

export default router;
