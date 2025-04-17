import cors from 'cors';
import express from 'express';
import fromCWD from 'from-cwd';
import fs from 'fs';
import multer from 'multer';
import path from 'path';

const PORT = 8080;
const UPLOAD_DIR = fromCWD('uploads');
if (!fs.existsSync(UPLOAD_DIR)) {
	fs.mkdirSync(UPLOAD_DIR);
}

const app = express();
app.use(cors());
app.use(express.static(fromCWD()));

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, UPLOAD_DIR);
	},
	filename: (req, file, cb) => {
		cb(null, `${Date.now()}-${file.originalname}`);
	},
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
	console.info(`[INFO] Received file: ${req.file.originalname}`);
	res.json({ status: 'ok', filename: req.file.filename });
});

app.get('/files', (req, res) => {
	fs.readdir(UPLOAD_DIR, (err, files) => {
		if (err) {
			return res
				.status(500)
				.json({ error: 'Failed to read file directory' });
		}
		res.json(files);
	});
});

app.get('/files/:filename', (req, res) => {
	const filePath = path.join(UPLOAD_DIR, req.params.filename);
	console.info(`[INFO] Downloading file: ${logFilePath(filePath)}`);
	if (fs.existsSync(filePath)) {
		res.download(filePath);
	} else {
		res.status(404).send('File not found');
	}
});

app.listen(PORT, () => {
	console.info(`[START] Server listening on http://localhost:${PORT}`);
});

function logFilePath(filePath) {
	return filePath.replace(fromCWD(), '');
}
