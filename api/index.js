const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');

require('dotenv').config();

app.use(express.json());

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
app.post('/blogApi/upload', upload.single('file'), (req, res) => {
	res.status(200).json('File has been uploaded');
});

app.use('/blogApi/auth', authRoute);
app.use('/blogApi/users', usersRoute);
app.use('/blogApi/posts', postRoute);
app.use('/blogApi/categories', catRoute);

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
