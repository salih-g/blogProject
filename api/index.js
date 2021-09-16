const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const cors = require('cors');

require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use('/images', express.static(path.join(__dirname, '/images')));

const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const postRoute = require('./routes/post');
const catRoute = require('./routes/categories');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'images');
	},
	filename: (req, file, cb) => {
		cb(null, req.body.name);
	},
});
const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
	res.status(200).json('File has been uploaded');
});

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', catRoute);

const PORT = process.env.PORT || 5000;

mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() =>
		app.listen(PORT, () => {
			console.log('DB Connected!');
			console.log(`Blog api  running on port: ${PORT}`);
		}),
	)
	.catch((error) => console.log(`${error} did not connect`));
