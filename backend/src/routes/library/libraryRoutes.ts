import { Router } from 'express';
import { createBook, createMember, deleteBook, getBookById, getBooks, getIssues, getMembers, issueBook, returnBook, updateBook } from '../../controllers/library/libraryController.js';
import { validate } from '../../middleware/validate.js';
import { createBookSchema, createMemberSchema } from '../../validators/library.js';
import { requireAuth } from '../../middleware/auth.js';

const router = Router();
router.use(requireAuth);

// Books
router.get('/books', getBooks);
router.get('/books/:id', getBookById);
router.post('/books', validate(createBookSchema), createBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

// Issues
router.get('/issues', getIssues);
router.post('/issue', issueBook);
router.put('/return/:id', returnBook);

// Members
router.get('/members', getMembers);
router.post('/members', validate(createMemberSchema), createMember);

export default router;

