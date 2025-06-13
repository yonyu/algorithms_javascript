import { factorial, factorial_2, factorial_iterative } from '../../src/recursion/factorial';

describe('factorial', () => {
    it('should return 1 for 0', () => {
        expect(factorial(0)).toBe(1);
        expect(factorial(1)).toBe(1);
        expect(factorial(3)).toBe(6);
        expect(factorial(8)).toBe(40320);
    });
});

describe('factorial_2', () => {
    it('should return 1 for 0', () => {
        expect(factorial_2(0)).toBe(1);
        expect(factorial_2(1)).toBe(1);
        expect(factorial_2(3)).toBe(6);
        expect(factorial_2(8)).toBe(40320);
    });
});

describe('factorial_iterative', () => {
    it('should return 1 for 0', () => {
        expect(factorial_iterative(0)).toBe(1);
        expect(factorial_iterative(1)).toBe(1);
        expect(factorial_iterative(3)).toBe(6);
        expect(factorial_iterative(8)).toBe(40320);
    });
});
