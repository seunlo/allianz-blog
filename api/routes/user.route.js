import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUsers,
  signOut,
  test,
  updateUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/signout", signOut);
router.get("/getallusers", verifyToken, getAllUsers);
router.get('/:userId', getUsers)

export default router;
