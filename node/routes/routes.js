import express from "express"

import { getAllAttendances, getAttendance, createAttendance, updateAttendance, deleteAttendance } from "../controllers/AttendanceController.js"

const router = express.Router()

router.get("/", getAllAttendances);
router.get("/:id", getAttendance);
router.post("/", createAttendance);
router.put("/:id", updateAttendance);
router.delete("/:id", deleteAttendance);


export default router