import { Entity } from './entity';
import { UniqueId } from './unique-id';

export type ExpenseStatus = 'paid' | 'unpaid' | 'separated';

export interface ExpenseProps {
  name: string;
  amount: number;
  dueAt: Date;
  status: ExpenseStatus;
}

export class Expense extends Entity<ExpenseProps> {
  static create(props: ExpenseProps, id?: UniqueId) {
    return new Expense(props, id);
  }
}
