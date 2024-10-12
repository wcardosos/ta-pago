import { BudgetSummary } from '../entities/budget-summary';

export interface BudgetRepository {
  getSummary(referenceMonth: string): Promise<BudgetSummary>;
}
