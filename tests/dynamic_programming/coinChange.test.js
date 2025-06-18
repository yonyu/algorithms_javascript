import coinChange, { coinChangeWithCoins } from "../../src/dynamic_programming/coinChange";

describe("test coin change", () => {
    it("test1", () => {
        let denominations = [1, 3, 4]

        let actual = coinChange(denominations, 6);

        expect(actual).toBe(2);

    });

    it("test2", () => {
        let denominations = [1, 3, 4]

        let result = coinChangeWithCoins(denominations, 6);

        expect(result.count).toBe(2);
        let actual = JSON.stringify(result.coinCounts);
        let expected = JSON.stringify([{"coin": 3, "count": 2}]);

        expect(actual).toBe(expected);

    });

    it("test3", () => {
        let denominations = [1, 5, 10, 25]

        let result = coinChangeWithCoins(denominations, 67);

        expect(result.count).toBe(6);
        let actual = JSON.stringify(result.coinCounts);
        let expected = JSON.stringify([{"coin": 1, "count": 2}, {"coin": 5, "count": 1}, {"coin": 10, "count": 1}, {"coin": 25, "count": 2}]);

        expect(actual).toBe(expected);

    });
})