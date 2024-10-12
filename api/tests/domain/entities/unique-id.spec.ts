import { UniqueId } from '@/domain/entities/unique-id';

describe('Entity: UniqueId', () => {
  it('should set the value provided', () => {
    const sut = new UniqueId('value');

    expect(sut.value).toBe('value');
  });

  it('should generate a random UUID when the value is not provided', () => {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

    const sut = new UniqueId();

    expect(sut.value).toMatch(uuidRegex);
  });
});
