import { Router } from "express";
import {
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
} from "../controllers/personController.js";

const router = Router();

router.get("/:userId", getPerson);

router.post("/", createPerson);

router.put("/:userId", updatePerson);

router.delete("/:userId", deletePerson);

export default router;
