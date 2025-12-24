import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import path from 'path';
import { projectsRoutes } from './routes';
import { authRoutes } from './routes/auth';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
	helmet({
		crossOriginResourcePolicy: { policy: 'same-site' },
	}),
);

app.use(
	cors({
		origin: 'http://localhost:5173',
		credentials: true,
	}),
);

app.use(cookieParser());
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use('/api/auth', authRoutes);

app.use('/api/projects', projectsRoutes);

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
