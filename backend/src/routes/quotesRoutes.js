import express from "express";
import { 
  getAllQuotes, 
  createQuote, 
  updateQuoteStatus, 
  convertQuoteToBooking, 
  deleteQuote 
} from "../controllers/quotesController.js";

const router = express.Router();

router.get("/", getAllQuotes);
router.post("/", createQuote);
router.put("/:id/status", updateQuoteStatus);
router.put("/:id/convert-to-booking", convertQuoteToBooking);
router.delete("/:id", deleteQuote);

export default router;