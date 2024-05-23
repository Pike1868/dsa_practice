import { canPlaceFlowers } from "../problems/canPlaceFlowers"

describe("Can Place Flowers Tests", () => {
    test("Input: flowerbed = [1,0,0,0,1], n = 1", () => {
        expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true)
    })

    test("Input: flowerbed = [1,0,0,0,1], n = 2", () => {
        expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false)
    })
    test("Input: flowerbed = [1,0,0,0,0,1], n = 2", () => {
        expect(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)).toBe(false);
    })
    test("Input: flowerbed = [0,0,1,0,1], n = 1", () => {
        expect(canPlaceFlowers([0,0,1,0,1], 1)).toBe(true);
    })
})