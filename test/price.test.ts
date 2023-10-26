import { Price } from "../src/models/price";

describe("Price", () => {
  describe("formatter", () => {
    it("formats a number with two decimal places and comma as decimal separator", () => {
      const price = 1234.5678;
      const expected = "1234,57";
      const actual = Price.formatter(price);
      expect(actual).toEqual(expected);
    });

    it("formats a number with zero decimal places and comma as decimal separator", () => {
      const price = 1234;
      const expected = "1234,00";
      const actual = Price.formatter(price);
      expect(actual).toEqual(expected);
    });

    it("formats a negative number with two decimal places and comma as decimal separator", () => {
      const price = -1234.5678;
      const expected = "-1234,57";
      const actual = Price.formatter(price);
      expect(actual).toEqual(expected);
    });
  });
});
