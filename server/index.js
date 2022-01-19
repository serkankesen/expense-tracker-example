import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import expenseRoutes from "./routes/expenses.js";
import incomeRoutes from "./routes/incomes.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("coding with Serkan");
});
app.use("/expenses", expenseRoutes);
app.use("/incomes", incomeRoutes);

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port: ${process.env.PORT} `)
    );
  })
  .catch((error) => {
    console.error(error.message);
  });

// mongoose.set("useFindAndModify", false);
