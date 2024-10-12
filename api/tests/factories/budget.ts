import {
  BudgetSummary,
  BudgetSummaryProps,
} from '@/domain/entities/budget-summary';
import { faker } from '@faker-js/faker';

export function makeBudgetSummary({
  revenuesTotal = parseFloat(faker.finance.amount()),
  expensesTotal = parseFloat(faker.finance.amount()),
  balance = parseFloat(faker.finance.amount()),
  totalPaid = parseFloat(faker.finance.amount()),
  totalUnpaid = parseFloat(faker.finance.amount()),
  totalSeparated = parseFloat(faker.finance.amount()),
}: Partial<BudgetSummaryProps> = {}) {
  return BudgetSummary.create({
    revenuesTotal,
    expensesTotal,
    balance,
    totalPaid,
    totalUnpaid,
    totalSeparated,
  });
}

export function makeBudgetRepository() {
  return {
    getSummary: vi.fn(),
  };
}
