import express, { Express } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import cors from "cors";
import todoRoutes from "./routes";
import bodyParser from "body-parser";
const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use('/', todoRoutes);
app.use(express.json());

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.k0qnclr.mongodb.net/`;

const dbconnect = async () => {
    try {
        await mongoose.connect(uri);
        console.log("database connect")
    } catch (error) {
        console.log(error)
    }
}

dbconnect();

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});