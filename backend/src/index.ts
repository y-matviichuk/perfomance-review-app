import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(helmet());

app.use(
	cors({
		origin: 'http://localhost:5173',
		credentials: true,
	}),
);

app.use(cookieParser());
app.use(express.json());

app.get('/health', (_req, res) => {
	res.json({
		status: 'OK',
		message: 'Server is running',
		timeStamp: new Date().toISOString(),
	});
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
