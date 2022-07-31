import express from 'express';
import http from "http";
import * as bodyParser from "body-parser";
import { FileController, upload } from './controller/FileController';
const app = express();
const httpServer = http.createServer(app);
const router = express.Router();
const cors = require("cors");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use("/",router);

router.get("/Files", async (req,res) => {await new FileController().ReadFile(req, res); });
router.post("/Files", async (req,res) => { await new FileController().CreateFile(req, res); });
router.put("/Files/Rename", async (req,res) => { await new FileController().RenameFile(req, res); });
router.put("/Files", async (req,res) => {await new FileController().AppendFile(req, res); });
router.delete("/Files/Delete", async (req,res) => {await new FileController().DeleteFile(req, res);  });
router.copy("/Files", async (req,res) => {await new FileController().MoveFile(req, res); });
router.post("/Files/Upload", upload.single("file"), cors(), (req, res) => { new FileController().UploadFile(req, res); });




// // Handle POST requests that come in formatted as JSON
// app.use(express.json())

// app.get('/', (req, res ) => {
//   res.send("Hello World");
// });


httpServer.listen(3000, '127.0.0.1', () => console.log('Server Running!!!'));
