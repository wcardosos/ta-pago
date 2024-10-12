import { Entity } from './entity';
import { UniqueId } from './unique-id';

export interface BudgetSummaryProps {
  revenuesTotal: number;
  expensesTotal: number;
  balance: number;
  totalPaid: number;
  totalUnpaid: number;
  totalSeparated: number;
}

export class BudgetSummary extends Entity<BudgetSummaryProps> {
  static create(props: BudgetSummaryProps, id?: UniqueId) {
    return new BudgetSummary(props, id);
  }

  get revenuesTotal() {
    return this.props.revenuesTotal;
  }

  get expensesTotal() {
    return this.props.expensesTotal;
  }

  get balance() {
    return this.props.balance;
  }

  get totalPaid() {
    return this.props.totalPaid;
  }

  get totalUnpaid() {
    return this.props.totalUnpaid;
  }

  get totalSeparated() {
    return this.props.totalSeparated;
  }
}
