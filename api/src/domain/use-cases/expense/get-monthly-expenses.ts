import { ExpensesRepository } from '@/domain/repositories/expenses-repository';

export class GetMontlyExpensesUseCase {
  constructor(private readonly expenseRepository: ExpensesRepository) {}

  async execute(referenceMonth: string) {
    return this.expenseRepository.listExpensesFromMonth(referenceMonth);
  }
}
