import { ReferenceMonth } from '@/domain/entities/reference-month';

describe('Entity: ReferenceMonth', () => {
  describe('isValid', () => {
    it('should return true when the value is valid', () => {
      const sut = new ReferenceMonth('2024-10-01');

      expect(sut.isValid()).toBe(true);
    });

    it('should return false when the value is not valid', () => {
      const sut = new ReferenceMonth('2024-13-01');

      expect(sut.isValid()).toBe(false);
    });

    it('should return false when the value does not has date pattern', () => {
      const sut = new ReferenceMonth('test');

      expect(sut.isValid()).toBe(false);
    });
  });
});
