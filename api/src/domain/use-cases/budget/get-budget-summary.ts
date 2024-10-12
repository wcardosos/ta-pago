import { BudgetSummary } from '@/domain/entities/budget-summary';
import { BudgetRepository } from '@/domain/repositories/budget-repository';

export class GetBudgetSummaryUseCase {
  constructor(private readonly budgetRepository: BudgetRepository) {}

  async execute(referenceMonth: string): Promise<BudgetSummary> {
    return this.budgetRepository.getSummary(referenceMonth);
  }
}
