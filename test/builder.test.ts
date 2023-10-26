import { Builder } from "../src/builder";
import { Product } from "../src/models";

describe("Builder", () => {
  let builder: Builder;

  beforeEach(() => {
    builder = new Builder();
  });

  describe("withProduct", () => {
    it("should add a product to the products array", () => {
      const product: Product = {
        id: "1",
        name: "Product 1",
        price: 10.0,
      };

      builder.withProduct(product);

      expect(builder["products"]).toEqual([product]);
    });

    it("should return the builder instance", () => {
      const product: Product = {
        id: "1",
        name: "Product 1",
        price: 10.0,
      };

      const result = builder.withProduct(product);

      expect(result).toBe(builder);
    });
  });

  describe("buildXml", () => {
    it("should build the XML string", () => {
      const product1: Product = {
        id: "1",
        name: "Product 1",
        price: 10.0,
      };

      const product2: Product = {
        id: "2",
        name: "Product 2",
        price: 20.0,
      };

      builder.withProduct(product1).withProduct(product2);
      const xml = builder.buildXml();

      expect(xml).toContain("<PRODUTOS>");
      expect(xml).toContain("<PRODUTO>");
      expect(xml).toContain("<CODIGO>1</CODIGO>");
      expect(xml).toContain("<NOME>Product 1</NOME>");
      expect(xml).toContain("<PRECO>10,00</PRECO>");
      expect(xml).toContain("<CODIGO>2</CODIGO>");
      expect(xml).toContain("<NOME>Product 2</NOME>");
      expect(xml).toContain("<PRECO>20,00</PRECO>");
      expect(xml).toContain("</PRODUTO>");
      expect(xml).toContain("</PRODUTOS>");
    });
  });
});
