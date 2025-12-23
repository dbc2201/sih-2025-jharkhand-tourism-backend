/**
 * Products Routes
 *
 * Defines all routes for product CRUD operations.
 *
 * Routes:
 * - GET    /products       - Get all products (paginated, filterable)
 * - GET    /products/:id   - Get single product by ID
 * - POST   /products       - Create new product
 * - PUT    /products/:id   - Update existing product
 * - DELETE /products/:id   - Delete product
 */

import { Router } from 'express';
import {
	getAllProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct
} from '../../controllers/products.controller';

const router = Router();

/**
 * @route   GET /api/products
 * @desc    Get all products with optional filters
 * @query   page, limit, category
 * @access  Public
 */
router.get('/', getAllProducts);

/**
 * @route   GET /api/products/:id
 * @desc    Get a single product by ID
 * @param   id - Product ID
 * @access  Public
 */
router.get('/:id', getProductById);

/**
 * @route   POST /api/products
 * @desc    Create a new product listing
 * @body    CreateProductInput
 * @access  Public (would be protected in production)
 */
router.post('/', createProduct);

/**
 * @route   PUT /api/products/:id
 * @desc    Update an existing product
 * @param   id - Product ID
 * @body    UpdateProductInput (partial)
 * @access  Public (would be protected in production)
 */
router.put('/:id', updateProduct);

/**
 * @route   DELETE /api/products/:id
 * @desc    Delete a product listing
 * @param   id - Product ID
 * @access  Public (would be protected in production)
 */
router.delete('/:id', deleteProduct);

export default router;
