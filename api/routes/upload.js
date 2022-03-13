import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import upload from '../controllers/upload.js'


const router = express.Router()

const PORT = process.env.PORT || 3001

router.post("/upload", upload.single("file"), async (req, res) => {
    if (req.file === undefined) return res.send("you must select a file.");
    const imgUrl = `http://localhost:${PORT}/file/${req.file.filename}`;
    return res.send(imgUrl);
});

export default router;