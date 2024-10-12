import { GetBudgetSummaryUseCase } from '@/domain/use-cases/budget/get-budget-summary';
import {
  makeBudgetRepository,
  makeBudgetSummary,
} from 'tests/factories/budget';

describe('Use case: GetBudgetSummaryUseCase', () => {
  let sut: GetBudgetSummaryUseCase;
  const budgetRepository = makeBudgetRepository();

  beforeEach(() => {
    vi.clearAllMocks();

    sut = new GetBudgetSummaryUseCase(budgetRepository);
  });

  describe('execute', () => {
    it('should return a budget summary', async () => {
      const referenceMock = '2024-10-01';

      budgetRepository.getSummary.mockResolvedValueOnce(
        makeBudgetSummary({
          revenuesTotal: 5000,
          expensesTotal: 2100,
          balance: 2300,
          totalPaid: 2100,
          totalUnpaid: 400,
          totalSeparated: 200,
        }),
      );

      const result = await sut.execute(referenceMock);

      expect(budgetRepository.getSummary).toHaveBeenCalledWith(referenceMock);
      expect(result.revenuesTotal).toBe(5000);
      expect(result.expensesTotal).toBe(2100);
      expect(result.balance).toBe(2300);
      expect(result.totalPaid).toBe(2100);
      expect(result.totalUnpaid).toBe(400);
      expect(result.totalSeparated).toBe(200);
    });
  });
});
