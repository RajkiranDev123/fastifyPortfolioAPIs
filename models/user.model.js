import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema({
  say: {
    type: String,

    trim: true,
  },
  name: {
    type: String,

    trim: true,
  },

}, { timestamps: true });

const Portfolio = mongoose.model("portfolio", PortfolioSchema);

export default Portfolio