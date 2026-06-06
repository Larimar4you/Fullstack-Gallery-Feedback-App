import createHttpError from 'http-errors';
import { Feedback } from '../models/feedback.js';

export const getAllFeedbacks = async (req, res) => {
  const feedbacks = await Feedback.find().sort({ createdAt: -1 });

  res.status(200).json(feedbacks);
};

export const getFeedbackById = async (req, res) => {
  const { feedbackId } = req.params;

  const feedback = await Feedback.findById(feedbackId);

  if (!feedback) {
    throw createHttpError(404, 'Feedback not found');
  }

  res.status(200).json(feedback);
};

export const createFeedback = async (req, res) => {
  const feedback = await Feedback.create(req.body);

  res.status(201).json(feedback);
};

export const deleteFeedback = async (req, res) => {
  const { feedbackId } = req.params;

  const feedback = await Feedback.findByIdAndDelete(feedbackId);

  if (!feedback) {
    throw createHttpError(404, 'Feedback not found');
  }

  res.status(200).json(feedback);
};

export const updateFeedback = async (req, res) => {
  const { feedbackId } = req.params;

  const feedback = await Feedback.findByIdAndUpdate(feedbackId, req.body, {
    new: true,
  });

  if (!feedback) {
    throw createHttpError(404, 'Feedback not found');
  }

  res.status(200).json(feedback);
};
