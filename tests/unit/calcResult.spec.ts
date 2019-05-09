import calcResult from '../../src/utils/calcResult';

describe('calc WPM', () => {
  it('calcResult returns correct result', () => {
    const result = calcResult('Hello my name is awesome app. Nice to meet you.', 7);
    expect(result).toBe(85);
  });
});
