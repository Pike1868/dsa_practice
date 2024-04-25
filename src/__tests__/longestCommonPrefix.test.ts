import { longestCommonPrefix } from '../problems/longestCommonPrefix';

describe('longestCommonPrefix Tests', () => {
    test(`["flower", "flow", "flight"]`, () => {
        expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
    });
    test(`["dog", "racecar", "car"]`, () => {
        expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
    });
    test(`["march", "marker", "market", "marriage", "marsh", "mary"]`, () => {
        expect(longestCommonPrefix(["march", "marker", "market", "marriage", "marsh", "mary"])).toBe("mar");
    });
});
