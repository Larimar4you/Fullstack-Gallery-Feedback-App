import { Router } from 'express';
import {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  deleteFeedback,
  updateFeedback,
} from '../controllers/feedbackController.js';

const feedbackRoutes = Router();

feedbackRoutes.get('/feedback', getAllFeedbacks);
feedbackRoutes.get('/feedback/:feedbackId', getFeedbackById);
feedbackRoutes.post('/feedback', createFeedback);
feedbackRoutes.delete('/feedback/:feedbackId', deleteFeedback);
feedbackRoutes.patch('/feedback/:feedbackId', updateFeedback);

export default feedbackRoutes;
