import { factorial, factorial_iterative } from '../../src/recursion/factorial';

describe('factorial', () => {
    it('should return 1 for 0', () => {
        expect(factorial(0)).toBe(1);
    });
});

describe('factorial_iterative', () => {
    it('should return 1 for 0', () => {
        expect(factorial_iterative(0)).toBe(1);
    });
});
