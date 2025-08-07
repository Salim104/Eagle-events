import express from "express";
import { getAllPackages,deletePackage,updatePackage,createPackage } from "../controllers/packagesController.js";
const router = express.Router();


router.get("/", getAllPackages);
router.post("/", createPackage);
router.put("/:id", updatePackage);
router.delete("/:id", deletePackage);

export default router;

