import type { Request, Response, Router } from 'express';
import express from 'express';
import jwt from 'jsonwebtoken';
import { findUserByEmail } from '../db';
import type { LoginRequest, UserResponse } from '../types';

const router: Router = express.Router();

// JWT secret (hardcoded for educational purposes)
const JWT_SECRET = 'portfolio-manager-secret-key-2024';
const COOKIE_NAME = 'auth_token';

// POST /api/auth/login
router.post('/login', (req: Request, res: Response) => {
	try {
		const { email, password } = req.body as LoginRequest;

		if (!email || !password) {
			res.status(400).json({ error: 'Email and password are required' });
			return;
		}

		const user = findUserByEmail(email);

		if (!user || user.password !== password) {
			res.status(401).json({ error: 'Invalid email or password' });
			return;
		}

		const token = jwt.sign(
			{
				id: user.id,
				email: user.email,
				username: user.username,
			},
			JWT_SECRET,
			{ expiresIn: '7d' },
		);

		res.cookie(COOKIE_NAME, token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'lax',
			maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
		});

		const userResponse: UserResponse = {
			id: user.id,
			username: user.username,
			email: user.email,
		};

		res.status(200).json({
			message: 'Login successful',
			user: userResponse,
		});
	} catch (error) {
		console.error('Login error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
});

export const authRoutes = router;
