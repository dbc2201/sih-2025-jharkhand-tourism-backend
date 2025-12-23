/**
 * Bookings Routes
 *
 * Defines all routes for booking operations.
 *
 * Routes:
 * - GET    /bookings            - Get all bookings (paginated, filterable)
 * - GET    /bookings/:id        - Get single booking by ID
 * - POST   /bookings            - Create new booking
 * - PUT    /bookings/:id/cancel - Cancel a booking
 */

import { Router } from 'express';
import {
	getAllBookings,
	getBookingById,
	createBooking,
	cancelBooking
} from '../../controllers/bookings.controller';

const router = Router();

/**
 * @route   GET /api/bookings
 * @desc    Get all bookings with optional filters
 * @query   page, limit, status
 * @access  Public (would be protected in production)
 */
router.get('/', getAllBookings);

/**
 * @route   GET /api/bookings/:id
 * @desc    Get a single booking by ID
 * @param   id - Booking ID
 * @access  Public (would be protected in production)
 */
router.get('/:id', getBookingById);

/**
 * @route   POST /api/bookings
 * @desc    Create a new booking
 * @body    CreateBookingInput
 * @access  Public
 */
router.post('/', createBooking);

/**
 * @route   PUT /api/bookings/:id/cancel
 * @desc    Cancel an existing booking
 * @param   id - Booking ID
 * @body    CancelBookingInput (optional reason)
 * @access  Public (would be protected in production)
 */
router.put('/:id/cancel', cancelBooking);

export default router;
