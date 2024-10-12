import { Expense, ExpenseProps } from '@/domain/entities/expense';
import { faker } from '@faker-js/faker';

export function makeExpense({
  name = faker.word.sample(),
  amount = parseFloat(faker.finance.amount()),
  dueAt = faker.date.soon(),
  status = 'unpaid',
}: Partial<ExpenseProps> = {}) {
  return Expense.create({
    name,
    amount,
    dueAt,
    status,
  });
}

export function makeExpensesRepository() {
  return {
    listExpensesFromMonth: vi.fn(),
  };
}
