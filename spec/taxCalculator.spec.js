const { calculateTax } = require('../src/taxCalculator');

describe('Tax Calculator', () => {
  it('returns zero tax for zero income', () => {
    const r = calculateTax(0);
    expect(r.tax).toBe(0);
    expect(r.takeHome).toBe(0);
  });

  it('does not tax income in the first sample bracket', () => {
    expect(calculateTax(8000).tax).toBe(0);
  });

  it('calculates progressive tax across brackets', () => {
    const r = calculateTax(50000);
    expect(r.tax).toBe(5000);
    expect(r.takeHome).toBe(45000);
  });

  it('rejects negative income', () => {
    expect(() => calculateTax(-1)).toThrowError(TypeError);
  });

  it('rejects non-numeric income', () => {
    expect(() => calculateTax('abc')).toThrowError(TypeError);
  });

  // Additional tests
  it('returns the correct effective tax rate', () => {
    const r = calculateTax(50000);
    expect(r.effectiveRate).toBe(0.1);
  });

  it('returns a tax breakdown for taxable income', () => {
    const r = calculateTax(50000);
    expect(r.breakdown.length).toBeGreaterThan(0);
    expect(r.breakdown[0].tax).toBe(0);
    expect(r.breakdown[1].tax).toBe(3000);
    expect(r.breakdown[2].tax).toBe(2000);
  });
});