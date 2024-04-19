import { romanToInt } from '../problems/romanToInt';

describe('romanToInt Tests', () => {
    test("Roman to Integer MXIV", () => {
        expect(romanToInt("MXIV")).toBe(1014);
    });

    test("Roman to Integer IX", () => {
        expect(romanToInt("IX")).toBe(9);
    });

    test("Roman to Integer LVIII", () => {
        expect(romanToInt("LVIII")).toBe(58);
    });

    test("Roman to Integer MCMXCIII", () => {
        expect(romanToInt("MCMXCIII")).toBe(1993);
    });
});
