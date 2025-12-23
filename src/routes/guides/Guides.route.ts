/**
 * Guides Routes
 *
 * Defines all routes for guide CRUD operations.
 *
 * Routes:
 * - GET    /guides       - Get all guides (paginated, filterable)
 * - GET    /guides/:id   - Get single guide by ID
 * - POST   /guides       - Create new guide profile
 * - PUT    /guides/:id   - Update existing guide
 * - DELETE /guides/:id   - Delete guide profile
 */

import { Router } from 'express';
import {
	getAllGuides,
	getGuideById,
	createGuide,
	updateGuide,
	deleteGuide
} from '../../controllers/guides.controller';

const router = Router();

/**
 * @route   GET /api/guides
 * @desc    Get all guides with optional filters
 * @query   page, limit, specialization
 * @access  Public
 */
router.get('/', getAllGuides);

/**
 * @route   GET /api/guides/:id
 * @desc    Get a single guide by ID
 * @param   id - Guide ID
 * @access  Public
 */
router.get('/:id', getGuideById);

/**
 * @route   POST /api/guides
 * @desc    Create a new guide profile
 * @body    CreateGuideInput
 * @access  Public (would be protected in production)
 */
router.post('/', createGuide);

/**
 * @route   PUT /api/guides/:id
 * @desc    Update an existing guide profile
 * @param   id - Guide ID
 * @body    UpdateGuideInput (partial)
 * @access  Public (would be protected in production)
 */
router.put('/:id', updateGuide);

/**
 * @route   DELETE /api/guides/:id
 * @desc    Delete a guide profile
 * @param   id - Guide ID
 * @access  Public (would be protected in production)
 */
router.delete('/:id', deleteGuide);

export default router;
