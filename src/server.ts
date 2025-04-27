import dotenv from "dotenv";
import app from "./middleware/app";
dotenv.config();
app.listen(process.env.PORT, () => {
  console.log("Port is running!!!");
});
