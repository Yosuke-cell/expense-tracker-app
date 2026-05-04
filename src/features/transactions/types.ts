export type TransactionType = 'expense' | 'income';

export type TransactionCategoryId =
  | 'food'
  | 'transportation'
  | 'shopping'
  | 'housing'
  | 'health'
  | 'education'
  | 'entertainment'
  | 'salary'
  | 'allowance'
  | 'other';

export type Transaction = {
  id: string;
  type: TransactionType;
  amount: number;
  categoryId: TransactionCategoryId;
  memo: string;
  date: string; // YYYY-MM-DD
  createdAt: string; // ISO string
  updatedAt?: string; // ISO string
};

export type TransactionFormInput = {
  type: TransactionType;
  amountInput: string;
  categoryId: TransactionCategoryId;
  memo: string;
  date: string;
};

export type CategoryTotal = {
  categoryId: TransactionCategoryId;
  totalAmount: number;
};

export type MonthlyTotal = {
  month: string; // YYYY-MM
  incomeTotal: number;
  expenseTotal: number;
  balance: number;
};