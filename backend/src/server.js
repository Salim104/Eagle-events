import express from "express";
import packagesRoutes from "./routes/packagesRoutes.js";
import equipmentRoutes from "./routes/equipmentRoutes.js";
import servicesRoutes from "./routes/servicesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();
//middleware
app.use(express.json());

app.use("/api/packages", packagesRoutes);
app.use("/api/equipments", equipmentRoutes);
app.use("/api/services", servicesRoutes);




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


