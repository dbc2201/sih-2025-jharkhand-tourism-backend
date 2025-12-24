/**
 * Express Type Extensions (Declaration File)
 *
 * This is a TypeScript declaration file (.d.ts) that extends the Express
 * library's type definitions. We need this because Express doesn't know
 * about our custom `user` property that we add to requests after JWT authentication.
 *
 * How it works:
 * 1. When a user logs in, we give them a JWT token
 * 2. They send this token with each request in the Authorization header
 * 3. Our `authenticate` middleware verifies the token and extracts user info
 * 4. We attach this info to `req.user` so controllers can access it
 *
 * The problem:
 * - Express's Request type doesn't have a `user` property
 * - TypeScript complains when we try to use `req.user`
 *
 * The solution:
 * - We use "declaration merging" to add the `user` property to Express's Request
 * - This file tells TypeScript: "Trust us, Request objects can have a user property"
 *
 * @module types/express
 *
 * @example
 * // In a protected controller, you can now access req.user
 * function getProfile(req: Request, res: Response) {
 *   const userId = req.user?.userId;  // TypeScript knows this exists!
 *   const role = req.user?.role;
 * }
 */

import { JwtPayload } from '../middleware/auth.middleware';

/*
 * Declaration Merging with Express
 *
 * The `declare global` block lets us extend global type definitions.
 * Inside, we open up Express's namespace and extend its Request interface.
 *
 * This is a common pattern when:
 * - Adding properties to Express's req/res objects
 * - Extending third-party library types
 * - Adding global variables to the Window object (in browser code)
 */
declare global {
	namespace Express {
		/**
		 * Extended Express Request interface.
		 *
		 * We add an optional `user` property that contains information
		 * extracted from the JWT token. It's optional (?) because not
		 * all requests are authenticated.
		 */
		interface Request {
			/**
			 * User information extracted from JWT token.
			 *
			 * This property is populated by the `authenticate` middleware.
			 * It will be undefined for unauthenticated requests or requests
			 * that use `optionalAuth` without a valid token.
			 *
			 * @see {@link JwtPayload} for the structure of this object
			 *
			 * @example
			 * // In a protected route handler
			 * if (req.user) {
			 *   console.log('User ID:', req.user.userId);
			 *   console.log('User Role:', req.user.role);
			 * }
			 */
			user?: JwtPayload;
		}
	}
}

/*
 * Empty export statement.
 *
 * This might look strange, but it's necessary! Without an export,
 * TypeScript treats this file as a "script" rather than a "module".
 * Declaration merging only works properly in modules.
 *
 * The empty export `export {}` turns this into a module without
 * actually exporting anything.
 */
export {};
