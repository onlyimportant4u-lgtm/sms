import type { Request, Response } from 'express';
import Book from '../../models/library/Book.js';
import BookIssue from '../../models/library/Issue.js';
import LibraryMember from '../../models/library/Member.js';

// Books
export const getBooks = async (_: Request, res: Response) => {
  const books = await Book.find();
  res.json({ success: true, data: books });
};

export const getBookById = async (req: Request, res: Response) => {
  const book = await Book.findById(req.params.id);
  res.json({ success: true, data: book });
};

export const createBook = async (req: Request, res: Response) => {
  const book = await Book.create(req.body);
  res.json({ success: true, data: book });
};

export const updateBook = async (req: Request, res: Response) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ success: true, data: book });
};

export const deleteBook = async (req: Request, res: Response) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ success: true, data: null });
};

// Issues
export const getIssues = async (_: Request, res: Response) => {
  const issues = await BookIssue.find();
  res.json({ success: true, data: issues });
};

export const issueBook = async (req: Request, res: Response) => {
  const issue = await BookIssue.create(req.body);
  res.json({ success: true, data: issue });
};

export const returnBook = async (req: Request, res: Response) => {
  const issue = await BookIssue.findByIdAndUpdate(req.params.id, { status: 'returned', returnDate: new Date() }, { new: true });
  res.json({ success: true, data: issue });
};

// Members
export const getMembers = async (_: Request, res: Response) => {
  const members = await LibraryMember.find();
  res.json({ success: true, data: members });
};

export const createMember = async (req: Request, res: Response) => {
  const member = await LibraryMember.create(req.body);
  res.json({ success: true, data: member });
};


