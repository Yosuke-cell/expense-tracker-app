import type { TransactionCategoryId, TransactionType } from './types';

export type TransactionCategory = {
  id: TransactionCategoryId;
  label: string;
  type: TransactionType | 'both';
  emoji: string;
};

export const TRANSACTION_CATEGORIES: TransactionCategory[] = [
  {
    id: 'food',
    label: 'Food',
    type: 'expense',
    emoji: '🍔',
  },
  {
    id: 'transportation',
    label: 'Transportation',
    type: 'expense',
    emoji: '🚌',
  },
  {
    id: 'shopping',
    label: 'Shopping',
    type: 'expense',
    emoji: '🛍️',
  },
  {
    id: 'housing',
    label: 'Housing',
    type: 'expense',
    emoji: '🏠',
  },
  {
    id: 'health',
    label: 'Health',
    type: 'expense',
    emoji: '💊',
  },
  {
    id: 'education',
    label: 'Education',
    type: 'expense',
    emoji: '📚',
  },
  {
    id: 'entertainment',
    label: 'Entertainment',
    type: 'expense',
    emoji: '🎮',
  },
  {
    id: 'salary',
    label: 'Salary',
    type: 'income',
    emoji: '💼',
  },
  {
    id: 'allowance',
    label: 'Allowance',
    type: 'income',
    emoji: '💵',
  },
  {
    id: 'other',
    label: 'Other',
    type: 'both',
    emoji: '📌',
  },
];