import { Expense } from '../entities/expense';

export interface ExpensesRepository {
  listExpensesFromMonth(referenceMonth: string): Promise<Expense[]>;
}
