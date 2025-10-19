import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// Route imports
import studentRoutes from './routes/student/studentRoutes.js';
import staffRoutes from './routes/staff/staffRoutes.js';
import feeRoutes from './routes/fees/feeRoutes.js';
import libraryRoutes from './routes/library/libraryRoutes.js';
import examRoutes from './routes/exams/examRoutes.js';
import attendanceRoutes from './routes/attendance/attendanceRoutes.js';
import transportRoutes from './routes/transport/transportRoutes.js';
import communicationRoutes from './routes/communication/communicationRoutes.js';
import reportRoutes from './routes/reports/reportRoutes.js';
import settingsRoutes from './routes/settings/settingsRoutes.js';
import authRoutes from './routes/auth/authRoutes.js';
import academicRoutes from './routes/academics/academicRoutes.js';
import userRoutes from './routes/users/userRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// DB connection
connectDB();

// Root endpoint
app.get('/', (req, res) => {
  res.send('API Running');
});

// Main API routes - make sure these match resource names!
app.use('/api/students', studentRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/academics', academicRoutes);
app.use('/api/fees', feeRoutes);
app.use('/api/library', libraryRoutes);
app.use('/api/exams', examRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/transport', transportRoutes);
app.use('/api/communication', communicationRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Error handler must be last
app.use(errorHandler);
