/**
 * Homestays Routes
 *
 * Defines all routes for homestay CRUD operations.
 *
 * Routes:
 * - GET    /homestays       - Get all homestays (paginated, filterable)
 * - GET    /homestays/:id   - Get single homestay by ID
 * - POST   /homestays       - Create new homestay
 * - PUT    /homestays/:id   - Update existing homestay
 * - DELETE /homestays/:id   - Delete homestay
 */

import { Router } from 'express';
import {
	getAllHomestays,
	getHomestayById,
	createHomestay,
	updateHomestay,
	deleteHomestay
} from '../../controllers/homestays.controller';

const router = Router();

/**
 * @route   GET /api/homestays
 * @desc    Get all homestays with optional filters
 * @query   page, limit, district, minPrice, maxPrice
 * @access  Public
 */
router.get('/', getAllHomestays);

/**
 * @route   GET /api/homestays/:id
 * @desc    Get a single homestay by ID
 * @param   id - Homestay ID
 * @access  Public
 */
router.get('/:id', getHomestayById);

/**
 * @route   POST /api/homestays
 * @desc    Create a new homestay listing
 * @body    CreateHomestayInput
 * @access  Public (would be protected in production)
 */
router.post('/', createHomestay);

/**
 * @route   PUT /api/homestays/:id
 * @desc    Update an existing homestay
 * @param   id - Homestay ID
 * @body    UpdateHomestayInput (partial)
 * @access  Public (would be protected in production)
 */
router.put('/:id', updateHomestay);

/**
 * @route   DELETE /api/homestays/:id
 * @desc    Delete a homestay listing
 * @param   id - Homestay ID
 * @access  Public (would be protected in production)
 */
router.delete('/:id', deleteHomestay);

export default router;
