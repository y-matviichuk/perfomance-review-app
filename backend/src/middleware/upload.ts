import multer from 'multer';

const FIVE_MB = 5 * 1024 * 1024;

const storage = multer.diskStorage({
	destination: (_req, _file, cb) => {
		cb(null, 'uploads/');
	},
	filename: (_req, file, cb) => {
		const uniqueName = `${Date.now()}-${file.originalname}`;
		cb(null, uniqueName);
	},
});

const fileFilter = (_req: any, file: Express.Multer.File, cb: any) => {
	const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];

	if (allowedTypes.includes(file.mimetype)) {
		cb(null, true);
	} else {
		cb(new Error('Only JPEG, PNG, and JPG files are allowed'), false);
	}
};

export const upload = multer({
	storage,
	fileFilter,
	limits: { fileSize: FIVE_MB },
});
