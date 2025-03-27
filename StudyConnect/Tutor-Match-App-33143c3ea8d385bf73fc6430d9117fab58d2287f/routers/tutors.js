import express from "express";
const router = express.Router();
import {
  searchAllTutors,
  getTutor,
  updateClass,
  getSchedule,
} from "../controllers/tutors.js";

/** 
 * function that lets users search all related tutors
 */
router.post("/book/tutors", searchAllTutors);

/** 
 * function that gets specific tutor
 */
router.get("/book/tutors/:tutorId", getTutor);

/**
 * function that updates user class schedule
 */
router.post("/api/addClass", updateClass);

/** 
 * function that gets user schedule for user to make booking
 */
router.get("/api/getSchedule", getSchedule);

export default router;
