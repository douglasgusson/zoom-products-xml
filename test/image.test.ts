import { Image } from "../src/models/image";

describe("Image", () => {
  describe("formatter", () => {
    it("should set the root URL_IMAGEM property when given a single URL", () => {
      const root = {};
      Image.formatter(["https://example.com/image.jpg"], {}, root);
      expect(root).toEqual({ URL_IMAGEM: "https://example.com/image.jpg" });
    });

    it("should set the root URL_IMAGEM_1 and URL_IMAGEM_2 properties when given two URLs", () => {
      const root = {};
      Image.formatter(
        ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
        {},
        root,
      );
      expect(root).toEqual({
        URL_IMAGEM_1: "https://example.com/image1.jpg",
        URL_IMAGEM_2: "https://example.com/image2.jpg",
      });
    });

    it("should set the root URL_IMAGEM_1, URL_IMAGEM_2, and URL_IMAGEM_3 properties when given three URLs", () => {
      const root = {};
      Image.formatter(
        [
          "https://example.com/image1.jpg",
          "https://example.com/image2.jpg",
          "https://example.com/image3.jpg",
        ],
        {},
        root,
      );
      expect(root).toEqual({
        URL_IMAGEM_1: "https://example.com/image1.jpg",
        URL_IMAGEM_2: "https://example.com/image2.jpg",
        URL_IMAGEM_3: "https://example.com/image3.jpg",
      });
    });

    it("should not set any properties on the root object when given an empty array", () => {
      const root = {};
      Image.formatter([], {}, root);
      expect(root).toEqual({});
    });
  });
});
