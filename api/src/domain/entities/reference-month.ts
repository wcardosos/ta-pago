export class ReferenceMonth {
  private readonly _value: string;

  constructor(value: string) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  isValid(): boolean {
    const regex = /^\d{4}-\d{2}-01$/;

    if (!regex.test(this._value)) return false;

    const [year, month, day] = this._value.split('-').map(Number);

    const date = new Date(year, month - 1, day);

    return (
      date.getFullYear() === year &&
      date.getMonth() + 1 === month &&
      date.getDate() === 1
    );
  }
}
