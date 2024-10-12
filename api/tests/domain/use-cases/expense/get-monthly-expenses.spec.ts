import { GetMontlyExpensesUseCase } from '@/domain/use-cases/expense/get-monthly-expenses';
import { makeExpense, makeExpensesRepository } from 'tests/factories/expense';

describe('Use case: GetMontlyExpensesUseCase', () => {
  let sut: GetMontlyExpensesUseCase;
  const expenseRepository = makeExpensesRepository();

  beforeEach(() => {
    vi.clearAllMocks();
    sut = new GetMontlyExpensesUseCase(expenseRepository);
  });

  describe('execute', () => {
    it('should return a list of expenses', async () => {
      const referenceMonth = '2024-10-01';
      const expenses = [makeExpense(), makeExpense(), makeExpense()];

      expenseRepository.listExpensesFromMonth.mockResolvedValueOnce(expenses);

      const result = await sut.execute(referenceMonth);

      expect(result).toEqual(expenses);
    });
  });
});
